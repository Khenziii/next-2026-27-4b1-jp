import Card from '@/components/Card';
import Link from 'next/link';

export default function AboutPage() {
	return (
		<main style={{ padding: '2rem' }}>
			<h1>O nas</h1>
			<Card title="Nasza misja">
				<p>Dowiedz się więcej o naszej szkolnej inicjatywie!</p>
			</Card>

			<Link href="/">Powrót</Link>
		</main>
	);
}
