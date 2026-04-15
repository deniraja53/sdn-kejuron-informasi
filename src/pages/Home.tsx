import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Profile } from '@/components/sections/Profile';
import { Activities } from '@/components/sections/Activities';
import { Teachers } from '@/components/sections/Teachers';
import { Announcements } from '@/components/sections/Announcements';
import { Contact } from '@/components/sections/Contact';
import { Feedback } from '@/components/sections/Feedback';
import { PrincipalWelcome } from '@/components/sections/PrincipalWelcome';
import { Stats } from '@/components/sections/Stats';
import { Gallery } from '@/components/sections/Gallery';
import { CTASection } from '@/components/sections/CTASection';
import { LatestActivity, LatestAnnouncement, SchoolAchievement } from '@/components/sections/Highlights';

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 container mx-auto px-4 md:px-6 py-24 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Row 1 & 2 */}
        <div className="md:col-span-3 md:row-span-2">
          <Hero />
        </div>
        <div className="md:col-span-1 md:row-span-2">
          <PrincipalWelcome />
        </div>

        {/* Row 3 */}
        <div className="md:col-span-1">
          <LatestActivity />
        </div>
        <div className="md:col-span-1">
          <LatestAnnouncement />
        </div>
        <div className="md:col-span-1">
          <SchoolAchievement />
        </div>
        <div className="md:col-span-1">
          <Stats />
        </div>

        {/* Row 4 & 5 */}
        <div className="md:col-span-2 md:row-span-2">
          <Gallery />
        </div>
        <div className="md:col-span-2">
          <Teachers />
        </div>
        <div className="md:col-span-2">
          <CTASection />
        </div>

        {/* Row 6 */}
        <div className="md:col-span-4">
          <Profile />
        </div>

        {/* Row 7 */}
        <div className="md:col-span-2">
          <Activities />
        </div>
        <div className="md:col-span-1">
          <Announcements />
        </div>
        <div className="md:col-span-1">
          <Feedback />
        </div>

        {/* Row 8 */}
        <div className="md:col-span-4">
          <Contact />
        </div>
      </main>
    </div>
  );
}
