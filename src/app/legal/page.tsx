import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const legalUpdatedOn = 'September 26, 2025'

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#05070f] text-white">
      <Navigation />
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-6">
          <header className="mb-12">
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 bg-white/5 text-xs font-semibold tracking-[0.3em] uppercase text-white/70">
              Legal
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold">Terms &amp; Legal Notice</h1>
            <p className="mt-4 text-white/70">Last updated: {legalUpdatedOn}</p>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              These Terms &amp; Legal Notices govern your access to and use of the Astrentech website, products, and
              services. By using our services, you agree to comply with these terms. If you do not agree, please do not
              access or use our services.
            </p>
          </header>

          <article className="space-y-10 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Company Information</h2>
              <p>
                Astrentech (“Astrentech”, “we”, “us”, or “our”) operates the website located at{' '}
                <a href="https://www.astrentech.com" className="text-accent-secondary hover:underline" target="_blank" rel="noreferrer">
                  https://www.astrentech.com
                </a>{' '}
                and provides associated services. Our registered address is C-18, Sector 105, Noida, Uttar Pradesh 201301,
                India. You can contact us at{' '}
                <a href="mailto:sales@astrentech.com" className="text-accent-secondary hover:underline">
                  sales@astrentech.com
                </a>{' '}
                or by phone at +91 8384016763.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
              <p>
                By accessing or using our services, you agree to be bound by these Terms &amp; Legal Notices and our
                Privacy Policy. If you are using the services on behalf of a company or organization, you represent that
                you have authority to bind that entity and you agree on its behalf.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Use of the Website</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>You agree to use the website in compliance with all applicable laws and regulations.</li>
                <li>You agree not to misuse the website, attempt to gain unauthorized access, or disrupt its operations.</li>
                <li>You are responsible for maintaining the confidentiality of any account credentials and for all activities under your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
              <p>
                All content, branding, trademarks, graphics, and software on the website are the property of Astrentech
                or its licensors. You may not reproduce, distribute, or create derivative works without prior written
                consent, except for personal, non-commercial use that complies with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p>
                Our website may contain links to third-party sites or services. Astrentech is not responsible for the
                content, policies, or practices of third-party providers. Accessing third-party services is at your own
                risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Confidential Information</h2>
              <p>
                Any confidential information shared by either party shall be protected with reasonable care. You agree
                not to disclose Astrentech’s proprietary information to third parties without prior consent, and we agree
                to protect your confidential information similarly, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Disclaimers</h2>
              <p>
                The website and services are provided “as is” and “as available” without warranties of any kind, either
                express or implied. Astrentech does not warrant that the services will be uninterrupted, error-free, or a
                particular fit for your purposes. We disclaim all liability for any loss or damage arising from your use
                of the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Astrentech is not liable for any indirect, incidental,
                consequential, or punitive damages, or any loss of profits or data arising from your use of the services.
                If liability cannot be disclaimed, the total liability of Astrentech shall not exceed the amount paid by
                you, if any, for accessing the services in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Astrentech, its affiliates, officers, and employees
                from any claims, damages, liabilities, costs, or expenses arising from your use of the services or breach
                of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
              <p>
                These Terms are governed by the laws of India without regard to its conflict of law provisions. Any
                disputes shall be subject to the exclusive jurisdiction of the courts located in Noida, Uttar Pradesh,
                India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Revised Terms will be posted on this page with an updated
                “Last updated” date. Continued use of the services constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Legal Notice or our Terms, please contact us at{' '}
                <a href="mailto:sales@astrentech.com" className="text-accent-secondary hover:underline">
                  sales@astrentech.com
                </a>{' '}
                or by phone at +91 8384016763.
              </p>
            </section>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  )
}

