import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AmbianceSection } from '@/components/AmbianceSection';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar isSticky={true} />

            <div className="pt-20">
                <AmbianceSection />
            </div>

            <Footer />
        </main>
    );
}