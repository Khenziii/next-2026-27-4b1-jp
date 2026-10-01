import Link from 'next/link';

export default function MarketingPage() {
	return (
		<main style={{ padding: '2rem' }}>
			<h1>Witaj na podstronie marketingu!</h1>
			<Link href="/">Powrót</Link>
		</main>
	);
}
