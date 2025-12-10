import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FieldErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  // Validation rules
  const validateName = (name: string): string | undefined => {
    const trimmed = name.trim()
    if (!trimmed) return 'Name is required.'
    if (trimmed.length < 2) return 'Name must be at least 2 characters.'
    if (trimmed.length > 50) return 'Name must be less than 50 characters.'
    // Allow letters, spaces, hyphens, apostrophes (for names like O'Brien, Mary-Jane)
    if (!/^[a-zA-Z\s'-]+$/.test(trimmed)) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes.'
    }
    // Prevent spam patterns (too many caps, repeated characters)
    const upperCaseCount = (trimmed.match(/[A-Z]/g) || []).length
    if (upperCaseCount > trimmed.length * 0.7 && trimmed.length > 5) {
      return 'Name contains too many capital letters.'
    }
    // Check for repeated characters (like "aaaa")
    if (/(.)\1{3,}/.test(trimmed)) {
      return 'Name contains invalid characters.'
    }
    return undefined
  }

  const validateEmail = (email: string): string | undefined => {
    const trimmed = email.trim()
    if (!trimmed) return 'Email is required.'
    
    // Check basic structure first
    if (!trimmed.includes('@')) return 'Email must contain @ symbol.'
    if (trimmed.startsWith('.') || trimmed.startsWith('@')) return 'Email format is invalid.'
    if (trimmed.includes('@.') || trimmed.includes('.@')) return 'Email format is invalid.'
    if (trimmed.includes('..')) return 'Email cannot contain consecutive dots.'
    
    // Split email into local and domain parts
    const parts = trimmed.split('@')
    if (parts.length !== 2) return 'Email must have exactly one @ symbol.'
    
    const [localPart, domain] = parts
    
    // Validate local part
    if (!localPart || localPart.length === 0) return 'Email must have a username before @.'
    if (localPart.length > 64) return 'Email username is too long (max 64 characters).'
    if (localPart.startsWith('.') || localPart.endsWith('.')) return 'Email username cannot start or end with a dot.'
    
    // Validate domain part - must have at least one dot for TLD
    if (!domain || domain.length === 0) return 'Email must have a domain after @.'
    if (!domain.includes('.')) return 'Email domain must include a valid extension (e.g., .com, .org).'
    
    // Check domain has TLD (top-level domain like .com, .org, etc.)
    const domainParts = domain.split('.')
    const tld = domainParts[domainParts.length - 1]
    if (!tld || tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) {
      return 'Email domain must have a valid extension (e.g., .com, .org).'
    }
    
    // Check domain doesn't start or end with dot or hyphen
    if (domain.startsWith('.') || domain.startsWith('-') || domain.endsWith('.') || domain.endsWith('-')) {
      return 'Email domain format is invalid.'
    }
    
    // Simple regex check - more permissive for valid emails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmed)) {
      return 'Please enter a valid email address format.'
    }
    
    if (trimmed.length > 254) return 'Email is too long (max 254 characters).'
    
    return undefined
  }

  const validateSubject = (subject: string): string | undefined => {
    const trimmed = subject.trim()
    if (!trimmed) return 'Subject is required.'
    if (trimmed.length < 3) return 'Subject must be at least 3 characters.'
    if (trimmed.length > 100) return 'Subject must be less than 100 characters.'
    // Prevent spam patterns
    const upperCaseCount = (trimmed.match(/[A-Z]/g) || []).length
    if (upperCaseCount > trimmed.length * 0.8 && trimmed.length > 10) {
      return 'Subject contains too many capital letters.'
    }
    // Check for spam words/patterns
    const spamPatterns = /(free|click here|buy now|limited time|act now|urgent!!!|!!{2,})/gi
    if (spamPatterns.test(trimmed)) {
      return 'Subject contains inappropriate content.'
    }
    return undefined
  }

  const validateMessage = (message: string): string | undefined => {
    const trimmed = message.trim()
    if (!trimmed) return 'Message is required.'
    if (trimmed.length < 10) return 'Message must be at least 10 characters.'
    if (trimmed.length > 5000) return 'Message must be less than 5000 characters.'
    // Prevent spam patterns
    const upperCaseCount = (trimmed.match(/[A-Z]/g) || []).length
    if (upperCaseCount > trimmed.length * 0.7 && trimmed.length > 50) {
      return 'Message contains too many capital letters.'
    }
    // Check for repeated characters/words (spam indicator)
    const repeatedWords = trimmed.match(/(\b\w+\b)\s+\1\s+\1/gi)
    if (repeatedWords && repeatedWords.length > 2) {
      return 'Message contains too many repeated words.'
    }
    return undefined
  }

  const validateField = (name: keyof FormState, value: string) => {
    switch (name) {
      case 'name':
        return validateName(value)
      case 'email':
        return validateEmail(value)
      case 'subject':
        return validateSubject(value)
      case 'message':
        return validateMessage(value)
      default:
        return undefined
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name as keyof FormState, form[name as keyof FormState])
    setErrors((prev) => {
      const newErrors = { ...prev }
      if (error) {
        newErrors[name as keyof FormState] = error
      } else {
        // Remove the error key entirely when valid
        delete newErrors[name as keyof FormState]
      }
      return newErrors
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    
    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name as keyof FormState, value)
      setErrors((prev) => {
        const newErrors = { ...prev }
        if (error) {
          newErrors[name as keyof FormState] = error
        } else {
          // Remove the error key entirely when valid
          delete newErrors[name as keyof FormState]
        }
        return newErrors
      })
    } else {
      // Clear error immediately when user starts typing (even if not touched)
      if (errors[name as keyof FormState]) {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors[name as keyof FormState]
          return newErrors
        })
      }
    }
  }

  // Helper to check if there are any actual errors
  const hasErrors = (): boolean => {
    return Object.keys(errors).length > 0 && Object.values(errors).some((error) => error !== undefined && error !== '')
  }

  // Check if form is valid and ready to submit
  const isFormValid = (): boolean => {
    // Check if there are any errors
    if (hasErrors()) return false
    
    // Check if all required fields are filled (basic check)
    const allFieldsFilled = 
      form.name.trim().length >= 2 &&
      form.email.trim().length > 0 &&
      form.subject.trim().length >= 3 &&
      form.message.trim().length >= 10
    
    return allFieldsFilled
  }

  const validate = (): boolean => {
    const newErrors: FieldErrors = {}
    let isValid = true

    Object.keys(form).forEach((key) => {
      const fieldName = key as keyof FormState
      const error = validateField(fieldName, form[fieldName])
      if (error) {
        newErrors[fieldName] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    // Mark all fields as touched when submitting
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    })
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')

    try {
      // Initialize EmailJS with your Public Key
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''

      console.log('EmailJS Config:', { publicKey, serviceId, templateId })

      if (!publicKey || !serviceId || !templateId) {
        throw new Error(`EmailJS configuration missing. Public Key: ${!!publicKey}, Service ID: ${!!serviceId}, Template ID: ${!!templateId}`)
      }

      emailjs.init(publicKey)

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        from_subject: form.subject,
        message: form.message,
      })

      console.log('EmailJS success:', result)

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error: any) {
      console.error('EmailJS error details:', error)
      console.error('Error message:', error?.message || 'Unknown error')
      console.error('Error status:', error?.status || 'N/A')
      console.error('Error text:', error?.text || 'N/A')
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  const baseField =
    'w-full rounded-2xl border bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/55 shadow-[0_15px_40px_rgba(4,7,18,0.35)] outline-none transition-all duration-200 focus:ring-2'

  const getFieldClasses = (fieldName: keyof FormState) => {
    const hasError = errors[fieldName]
    const isTouched = touched[fieldName]
    const hasValue = form[fieldName].trim()
    
    if (hasError) {
      return `${baseField} border-red-400/80 focus:border-red-400 focus:ring-red-400/40 animate-shake`
    }
    if (isTouched && !hasError && hasValue) {
      return `${baseField} border-emerald-400/50 focus:border-emerald-400/70 focus:ring-emerald-400/40`
    }
    return `${baseField} border-white/20 focus:border-accent-teal/70 focus:ring-accent-teal/40`
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="block text-xs font-medium text-white/70">
              Full Name <span className="text-red-400">*</span>
            </label>
            {form.name && (
              <span className="text-xs text-white/40">
                {form.name.trim().length}/50
              </span>
            )}
          </div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getFieldClasses('name')}
            autoComplete="name"
            placeholder="John Doe"
            maxLength={50}
          />
          {errors.name && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
              <span>⚠</span> {errors.name}
            </p>
          )}
          {!errors.name && touched.name && form.name.trim() && (
            <p className="mt-1.5 text-xs text-emerald-400">✓ Valid</p>
          )}
        </div>
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="block text-xs font-medium text-white/70">
              Email Address <span className="text-red-400">*</span>
            </label>
            {form.email && (
              <span className="text-xs text-white/40">
                {form.email.trim().length}/254
              </span>
            )}
          </div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getFieldClasses('email')}
            autoComplete="email"
            placeholder="john@example.com"
            maxLength={254}
          />
          {errors.email && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
              <span>⚠</span> {errors.email}
            </p>
          )}
          {!errors.email && touched.email && form.email.trim() && (
            <p className="mt-1.5 text-xs text-emerald-400">✓ Valid email</p>
          )}
        </div>
      </div>
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label className="block text-xs font-medium text-white/70">
            Subject <span className="text-red-400">*</span>
          </label>
          {form.subject && (
            <span className="text-xs text-white/40">
              {form.subject.trim().length}/100
            </span>
          )}
        </div>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          className={getFieldClasses('subject')}
          placeholder="What can we help you with?"
          maxLength={100}
        />
        {errors.subject && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
            <span>⚠</span> {errors.subject}
          </p>
        )}
        {!errors.subject && touched.subject && form.subject.trim() && (
          <p className="mt-1.5 text-xs text-emerald-400">✓ Valid</p>
        )}
      </div>
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label className="block text-xs font-medium text-white/70">
            Message <span className="text-red-400">*</span>
          </label>
          {form.message && (
            <span className={`text-xs ${
              form.message.trim().length > 5000 
                ? 'text-red-400' 
                : form.message.trim().length > 4500 
                ? 'text-yellow-400' 
                : 'text-white/40'
            }`}>
              {form.message.trim().length}/5000
            </span>
          )}
        </div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={8}
          className={`${getFieldClasses('message')} resize-y min-h-[120px]`}
          placeholder="Tell us about your project in detail..."
          maxLength={5000}
        />
        {errors.message && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
            <span>⚠</span> {errors.message}
          </p>
        )}
        {!errors.message && touched.message && form.message.trim() && (
          <p className="mt-1.5 text-xs text-emerald-400">
            ✓ {form.message.trim().length >= 10 ? 'Valid message' : 'Keep typing...'}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting' || !isFormValid()}
        className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-magenta px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(7,10,30,0.45)] transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:brightness-100"
      >
        {status === 'submitting' ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
            Sending...
          </>
        ) : (
          <>
            <span>Send Message</span>
            <span>→</span>
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="mt-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-4 py-3">
          <p className="flex items-center gap-2 text-sm font-medium text-emerald-400">
            <span className="text-lg">✓</span>
            Message sent successfully! We'll be in touch shortly.
          </p>
        </div>
      )}
      {status === 'error' && (
        <div className="mt-3 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3">
          <p className="flex items-center gap-2 text-sm font-medium text-red-400">
            <span className="text-lg">⚠</span>
            Something went wrong. Please check your connection and try again.
          </p>
        </div>
      )}
      {hasErrors() && status === 'idle' && (
        <p className="mt-2 text-center text-xs text-white/60">
          Please fix the errors above before submitting.
        </p>
      )}
    </form>
  )
}



