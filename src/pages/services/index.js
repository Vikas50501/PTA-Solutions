const { pageHero, breadcrumbSchema } = require('../../partials/layout.js');

const PATH = '/services';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services' }];

module.exports = {
  title: 'Our Hearing & Speech Services | PTA Solutions Chembur, Mumbai',
  description: 'Explore assessment and therapy services at PTA Solutions: Hearing Tests, Hearing Aids, Speech Therapy, Newborn Screening, and NRI Care in Chembur, Mumbai.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Hearing Assessment, Hearing-Aid Care & Speech Therapy' }],
    title: 'Our Hearing & Speech Services',
    subtitle: 'Explore our assessment and therapy services to understand what each service involves, who it may help and how to book an appointment. We will help you identify the appropriate next step based on your concerns and clinical needs.',
  }),
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH)],
  body: `
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">

    <!-- 5 Core Services Grid -->
    <div>
      <div class="max-w-3xl mb-8">
        <span class="font-mono text-[12px] font-bold text-[#1797A6] uppercase tracking-widest">Clinical Care Overview</span>
        <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0D234A] mt-1">Our Core Services</h2>
        <p class="text-[15px] text-[#64748B] mt-2">Comprehensive diagnostics, hearing rehabilitation, and speech therapy for children, adults and seniors.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Service 1: Hearing Tests & Audiology -->
        <div class="p-8 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4 flex flex-col justify-between hover:border-[#1797A6] transition-all">
          <div>
            <div class="w-12 h-12 rounded-xl bg-white border border-[#D7E3E8] flex items-center justify-center text-[#1797A6] shadow-sm">
              <span class="material-symbols-outlined text-[24px]">hearing</span>
            </div>
            <h3 class="text-[22px] font-display font-bold text-[#0D234A] mt-4">Hearing Tests &amp; Audiology</h3>
            <p class="text-[14px] text-[#64748B] mt-2 leading-relaxed">Hearing tests to assess hearing ability, along with middle-ear testing when indicated. We explain the results and discuss suitable next steps, including hearing-aid options when appropriate.</p>
          </div>
          <a href="/services/hearing-tests" class="w-full text-center py-2.5 bg-white border border-[#D7E3E8] font-display font-bold text-[13px] text-[#1797A6] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
            Explore Hearing Tests →
          </a>
        </div>

        <!-- Service 2: Hearing Aids & Hearing Rehabilitation -->
        <div class="p-8 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4 flex flex-col justify-between hover:border-[#1797A6] transition-all">
          <div>
            <div class="w-12 h-12 rounded-xl bg-white border border-[#D7E3E8] flex items-center justify-center text-[#1797A6] shadow-sm">
              <span class="material-symbols-outlined text-[24px]">hearing_disabled</span>
            </div>
            <h3 class="text-[22px] font-display font-bold text-[#0D234A] mt-4">Hearing Aids &amp; Rehabilitation</h3>
            <p class="text-[14px] text-[#64748B] mt-2 leading-relaxed">Guidance on choosing suitable hearing aids, hearing-aid trials where available, fitting, adjustments, counselling and follow-up support.</p>
          </div>
          <a href="/services/hearing-aids" class="w-full text-center py-2.5 bg-white border border-[#D7E3E8] font-display font-bold text-[13px] text-[#1797A6] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
            Explore Hearing Aids →
          </a>
        </div>

        <!-- Service 3: Speech & Language Therapy -->
        <div class="p-8 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4 flex flex-col justify-between hover:border-[#1797A6] transition-all">
          <div>
            <div class="w-12 h-12 rounded-xl bg-white border border-[#D7E3E8] flex items-center justify-center text-[#1797A6] shadow-sm">
              <span class="material-symbols-outlined text-[24px]">record_voice_over</span>
            </div>
            <h3 class="text-[22px] font-display font-bold text-[#0D234A] mt-4">Speech &amp; Language Therapy</h3>
            <p class="text-[14px] text-[#64748B] mt-2 leading-relaxed">Assessment and therapy for speech and language delays, speech-sound difficulties, stuttering-stammering, voice concerns and communication difficulties following stroke or other neurological conditions.</p>
          </div>
          <a href="/services/speech-therapy" class="w-full text-center py-2.5 bg-white border border-[#D7E3E8] font-display font-bold text-[13px] text-[#1797A6] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
            Explore Speech Therapy →
          </a>
        </div>

        <!-- Service 4: Newborn & Infant Hearing Assessment -->
        <div class="p-8 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4 flex flex-col justify-between hover:border-[#1797A6] transition-all">
          <div>
            <div class="w-12 h-12 rounded-xl bg-white border border-[#D7E3E8] flex items-center justify-center text-[#1797A6] shadow-sm">
              <span class="material-symbols-outlined text-[24px]">child_care</span>
            </div>
            <h3 class="text-[22px] font-display font-bold text-[#0D234A] mt-4">Newborn &amp; Infant Assessment</h3>
            <p class="text-[14px] text-[#64748B] mt-2 leading-relaxed">Hearing screening and diagnostic testing for babies, using appropriate tests such as OAE or ABR/BERA when available and clinically indicated. The appropriate test depends on the baby's age, history and screening results.</p>
          </div>
          <a href="/services/newborn-screening" class="w-full text-center py-2.5 bg-white border border-[#D7E3E8] font-display font-bold text-[13px] text-[#1797A6] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
            Explore Newborn Screening →
          </a>
        </div>

        <!-- Service 5: NRI Parent Care Coordination -->
        <div class="p-8 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4 flex flex-col justify-between hover:border-[#1797A6] transition-all">
          <div>
            <div class="w-12 h-12 rounded-xl bg-white border border-[#D7E3E8] flex items-center justify-center text-[#1797A6] shadow-sm">
              <span class="material-symbols-outlined text-[24px]">public</span>
            </div>
            <h3 class="text-[22px] font-display font-bold text-[#0D234A] mt-4">NRI Parent Care Coordination</h3>
            <p class="text-[14px] text-[#64748B] mt-2 leading-relaxed">Helping family members living abroad coordinate hearing or speech assessments for parents in Mumbai, understand the findings and discuss suitable next steps with the patient's consent.</p>
          </div>
          <a href="/nri-hearing-care" class="w-full text-center py-2.5 bg-[#087F8C] text-white font-display font-bold text-[13px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
            View NRI Care Details →
          </a>
        </div>
      </div>
    </div>

    <!-- Diagnostic Hearing Care Deep Dive (Tests A - F) -->
    <div id="hearing-care" class="pt-8 border-t border-[#D7E3E8]">
      <div class="max-w-3xl mb-8">
        <span class="font-mono text-[12px] font-bold text-[#1797A6] uppercase tracking-widest">Diagnostic Procedures</span>
        <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0D234A] mt-1">Explore Hearing Care</h2>
        <p class="text-[15px] text-[#64748B] mt-2">Clinical diagnostic evaluations conducted in our sound-treated testing suite in Chembur, Mumbai.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Test A -->
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-3">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-bold text-[13px]">A</span>
            <h3 class="text-[18px] font-display font-bold text-[#0D234A]">Pure Tone Audiometry (PTA)</h3>
          </div>
          <p class="text-[14px] text-[#64748B] leading-relaxed">
            PTA is a hearing test that measures the quietest sounds a person can hear at different pitches. The results help assess the degree and pattern of hearing loss and whether hearing sensitivity differs between the ears.
          </p>
          <div class="pt-2 text-[13px] space-y-1.5">
            <p><strong class="text-[#0D234A]">Who may benefit:</strong> <span class="text-[#64748B]">People who have difficulty hearing conversations, ask others to repeat themselves, or turn up the TV volume.</span></p>
            <p><strong class="text-[#0D234A]">What to expect:</strong> <span class="text-[#64748B]">Listening through headphones/earphones; bone-conduction testing when indicated.</span></p>
            <p><strong class="text-[#0D234A]">Results:</strong> <span class="text-[#64748B]">Plotted on an audiogram and explained clearly to guide appropriate next steps.</span></p>
          </div>
        </div>

        <!-- Test B -->
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-3">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-bold text-[13px]">B</span>
            <h3 class="text-[18px] font-display font-bold text-[#0D234A]">Tympanometry</h3>
          </div>
          <p class="text-[14px] text-[#64748B] leading-relaxed">
            Tympanometry assesses how the eardrum moves in response to changes in air pressure in the ear canal. It helps evaluate the function of the eardrum and middle-ear system.
          </p>
          <div class="pt-2 text-[13px] space-y-1.5">
            <p><strong class="text-[#0D234A]">Who may benefit:</strong> <span class="text-[#64748B]">People with ear fullness, suspected middle-ear problems, or conductive hearing concerns.</span></p>
            <p><strong class="text-[#0D234A]">What to expect:</strong> <span class="text-[#64748B]">A small soft probe placed at the ear canal entrance; quick and painless.</span></p>
            <p><strong class="text-[#0D234A]">Results:</strong> <span class="text-[#64748B]">Assesses middle-ear function alongside patient symptoms and test results.</span></p>
          </div>
        </div>

        <!-- Test C -->
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-3">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-bold text-[13px]">C</span>
            <h3 class="text-[18px] font-display font-bold text-[#0D234A]">Speech Audiometry (When Indicated)</h3>
          </div>
          <p class="text-[14px] text-[#64748B] leading-relaxed">
            Speech audiometry assesses how well a person detects or recognises spoken words at suitable listening levels. It provides additional information about functional hearing.
          </p>
          <div class="pt-2 text-[13px] space-y-1.5">
            <p><strong class="text-[#0D234A]">Who may benefit:</strong> <span class="text-[#64748B]">People who hear sounds but struggle to understand speech in noise.</span></p>
            <p><strong class="text-[#0D234A]">What to expect:</strong> <span class="text-[#64748B]">Listening to word material and responding according to test procedures.</span></p>
            <p><strong class="text-[#0D234A]">Results:</strong> <span class="text-[#64748B]">Interpreted with pure-tone audiometry for a complete listening profile.</span></p>
          </div>
        </div>

        <!-- Test D -->
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-3">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-bold text-[13px]">D</span>
            <h3 class="text-[18px] font-display font-bold text-[#0D234A]">Otoacoustic Emissions (OAE) Test</h3>
          </div>
          <p class="text-[14px] text-[#64748B] leading-relaxed">
            OAE testing checks for sound responses produced by the inner ear, particularly the outer hair cells. It is commonly used in newborn hearing screening.
          </p>
          <div class="pt-2 text-[13px] space-y-1.5">
            <p><strong class="text-[#0D234A]">Who may benefit:</strong> <span class="text-[#64748B]">Newborns, infants and other patients when clinically indicated.</span></p>
            <p><strong class="text-[#0D234A]">What to expect:</strong> <span class="text-[#64748B]">A small probe in the ear canal measures the cochlear response painlessly.</span></p>
            <p><strong class="text-[#0D234A]">Results:</strong> <span class="text-[#64748B]">Indicates hair cell function; follow-up testing scheduled if indicated.</span></p>
          </div>
        </div>

        <!-- Test E -->
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-3">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-bold text-[13px]">E</span>
            <h3 class="text-[18px] font-display font-bold text-[#0D234A]">BERA / ABR Hearing Assessment</h3>
          </div>
          <p class="text-[14px] text-[#64748B] leading-relaxed">
            BERA, also called ABR, is an objective hearing assessment that records electrical responses from the auditory pathway in response to sound.
          </p>
          <div class="pt-2 text-[13px] space-y-1.5">
            <p><strong class="text-[#0D234A]">Who may benefit:</strong> <span class="text-[#64748B]">Babies, children, or adults requiring objective auditory pathway assessment.</span></p>
            <p><strong class="text-[#0D234A]">What to expect:</strong> <span class="text-[#64748B]">Electrodes on the skin record responses while sound is played via earphones.</span></p>
            <p><strong class="text-[#0D234A]">Results:</strong> <span class="text-[#64748B]">Interpreted by our clinician to determine hearing thresholds objectively.</span></p>
          </div>
        </div>

        <!-- Test F -->
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-3">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-bold text-[13px]">F</span>
            <h3 class="text-[18px] font-display font-bold text-[#0D234A]">Hearing-Aid Consultation, Trial &amp; Fitting</h3>
          </div>
          <p class="text-[14px] text-[#64748B] leading-relaxed">
            We help patients understand their hearing assessment and explore hearing-aid options based on their hearing needs, communication goals, comfort, lifestyle and budget.
          </p>
          <div class="pt-2 text-[13px] space-y-1.5">
            <p><strong class="text-[#0D234A]">What the service includes:</strong> <span class="text-[#64748B]">Device discussion, trial where available, fitting, daily care and follow-up adjustments.</span></p>
            <p><strong class="text-[#0D234A]">A personalised approach:</strong> <span class="text-[#64748B]">Tailored to individual audiograms, ear condition, comfort, and listening needs.</span></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Speech Therapy Conditions Overview -->
    <div id="speech-therapy" class="pt-8 border-t border-[#D7E3E8]">
      <div class="max-w-3xl mb-8">
        <span class="font-mono text-[12px] font-bold text-[#1797A6] uppercase tracking-widest">Communication Care</span>
        <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0D234A] mt-1">Speech &amp; Language Therapy</h2>
        <p class="text-[15px] text-[#64748B] mt-2">We provide individualised assessment and therapy for children and adults with speech, language, voice and communication difficulties.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="p-5 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8]">
          <span class="text-[11px] font-bold text-[#1797A6] uppercase">Condition 1</span>
          <h4 class="font-display font-bold text-[15px] text-[#0D234A] mt-1">Child Speech &amp; Language</h4>
          <p class="text-[12.5px] text-[#64748B] mt-1">Speech delay, DLD, ASD communication, receptive/expressive needs.</p>
        </div>
        <div class="p-5 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8]">
          <span class="text-[11px] font-bold text-[#1797A6] uppercase">Condition 2</span>
          <h4 class="font-display font-bold text-[15px] text-[#0D234A] mt-1">Speech Sound &amp; Articulation</h4>
          <p class="text-[12.5px] text-[#64748B] mt-1">Articulation errors, phonological disorders, clarity improvements.</p>
        </div>
        <div class="p-5 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8]">
          <span class="text-[11px] font-bold text-[#1797A6] uppercase">Condition 3</span>
          <h4 class="font-display font-bold text-[15px] text-[#0D234A] mt-1">Stammering &amp; Fluency</h4>
          <p class="text-[12.5px] text-[#64748B] mt-1">Stuttering support for children, teens, and adults, building confidence.</p>
        </div>
        <div class="p-5 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8]">
          <span class="text-[11px] font-bold text-[#1797A6] uppercase">Condition 4</span>
          <h4 class="font-display font-bold text-[15px] text-[#0D234A] mt-1">Stroke Rehabilitation</h4>
          <p class="text-[12.5px] text-[#64748B] mt-1">Aphasia, dysarthria, apraxia and functional communication recovery.</p>
        </div>
        <div class="p-5 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8]">
          <span class="text-[11px] font-bold text-[#1797A6] uppercase">Condition 5</span>
          <h4 class="font-display font-bold text-[15px] text-[#0D234A] mt-1">Voice Disorders</h4>
          <p class="text-[12.5px] text-[#64748B] mt-1">Vocal nodules, muscle tension, hoarseness, and vocal fatigue therapy.</p>
        </div>
        <div class="p-5 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8]">
          <span class="text-[11px] font-bold text-[#1797A6] uppercase">Condition 6</span>
          <h4 class="font-display font-bold text-[15px] text-[#0D234A] mt-1">Neurological Disorders</h4>
          <p class="text-[12.5px] text-[#64748B] mt-1">Parkinson's, brain injury, MS and adult speech maintenance.</p>
        </div>
        <div class="p-5 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8]">
          <span class="text-[11px] font-bold text-[#1797A6] uppercase">Condition 7</span>
          <h4 class="font-display font-bold text-[15px] text-[#0D234A] mt-1">Social Communication</h4>
          <p class="text-[12.5px] text-[#64748B] mt-1">Conversational turn-taking, pragmatic context, and interaction.</p>
        </div>
        <div class="p-5 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8]">
          <span class="text-[11px] font-bold text-[#1797A6] uppercase">Condition 8</span>
          <h4 class="font-display font-bold text-[15px] text-[#0D234A] mt-1">Other Communication Needs</h4>
          <p class="text-[12.5px] text-[#64748B] mt-1">Resonance, cleft palate, developmental support and family guidance.</p>
        </div>
      </div>
      <div class="mt-6 text-center">
        <a href="/services/speech-therapy" class="inline-block px-6 py-2.5 bg-white border border-[#D7E3E8] font-display font-bold text-[13px] text-[#1797A6] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
          View Complete Speech Therapy Details →
        </a>
      </div>
    </div>

    <!-- Bottom CTA Bar -->
    <div class="p-8 bg-[#EEF6F8] rounded-2xl border border-[#D7E3E8] flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 class="text-[22px] font-display font-bold text-[#0D234A]">Find the right care for you</h3>
        <p class="text-[14px] text-[#64748B] mt-1">Connect directly with PTA SOLUTIONS HEARING AND SPEECH CARE CLINICS at our Chembur clinic.</p>
      </div>
      <a href="/book-appointment" class="px-8 py-3 bg-[#0D234A] text-white font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] transition-all whitespace-nowrap">
        Book Appointment
      </a>
    </div>
  </div>
</section>
`
};
