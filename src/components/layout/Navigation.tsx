'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { openTallyPopup } from '@/lib/engagementLinks'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'AI Consulting', 
      href: '#',
      dropdown: [
        { name: 'AI Transformation', href: '/ai-transformation' },
        { name: 'AI Engineering', href: '/ai-engineering' },
        { name: 'Intelligent Automations', href: '/intelligent-automations' }
      ]
    },
    { 
      name: 'Products', 
      href: '/products',
      dropdown: [
        { name: 'Santrix — Enterprise AI Copilot', href: '/products/santrix' },
        { name: 'Orzora — Market Research Copilot', href: '/products/orzora' }
      ]
    },
    { name: 'Digital Services', href: '/consulting-modernization' },
    { name: 'Hire Talent', href: '/hire-talent' },
    { name: 'MVP Studio', href: '/mvp-studio' },
    { name: 'Who We Are', href: '/about-us' },
    { name: 'Industries', href: '/industries' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-xl font-semibold tracking-[-0.02em]">
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Astrenox
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-7 text-sm">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="opacity-90 hover:opacity-100"
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className={`absolute top-full left-0 mt-2 ${item.name === 'Products' ? 'w-72' : 'w-56'} bg-bg-elevated border border-border-soft rounded-lg shadow-float opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-fast z-50`}>
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors duration-fast text-sm"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            type="button"
            onClick={openTallyPopup}
            className="hidden md:block rounded-full border border-white/15 px-3.5 py-1.5 text-sm font-medium hover:bg-white/5"
          >
            Get Started
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-accent-primary transition-colors duration-fast"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-bg-elevated/95 backdrop-blur-xl rounded-lg mt-2 border border-border-soft">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-text-secondary hover:text-text-primary font-medium transition-colors duration-fast"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-text-muted hover:text-text-primary font-medium transition-colors duration-fast"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <button
                  type="button"
                  onClick={() => {
                    openTallyPopup()
                    setIsOpen(false)
                  }}
                  className="block w-full text-center rounded-full border border-white/15 px-3.5 py-1.5 text-sm font-medium hover:bg-white/5"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
