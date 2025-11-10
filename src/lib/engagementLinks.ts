'use client'

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void
    }
  }
}

const CALENDLY_URL = 'https://calendly.com/prajwal-astrentech/30min'
const TALLY_FORM_URL = process.env.NEXT_PUBLIC_TALLY_FORM_URL ?? ''

export const openCalendly = () => {
  if (typeof window === 'undefined') return
  window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
}

export const openTallyPopup = () => {
  if (typeof window === 'undefined') return

  if (!TALLY_FORM_URL) {
    console.warn('NEXT_PUBLIC_TALLY_FORM_URL is not configured.')
    return
  }

  if (window.Tally?.openPopup) {
    window.Tally.openPopup(TALLY_FORM_URL, {
      layout: 'modal',
      width: 450,
      overlay: true,
      hideTitle: true
    })
  } else {
    window.open(TALLY_FORM_URL, '_blank', 'noopener,noreferrer')
  }
}

export { CALENDLY_URL, TALLY_FORM_URL }

