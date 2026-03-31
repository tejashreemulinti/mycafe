import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MenuSection } from '@/components/MenuSection';

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar isSticky={true} />

            <div className="pt-20">
                <MenuSection />
            </div>

            <Footer />
        </main>
    );
}