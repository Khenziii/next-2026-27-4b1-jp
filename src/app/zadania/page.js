import { prisma } from '@/lib/prisma';
import { dodajZadanie, przelaczZrobione, usunZadanie } from './actions';

export default async function ZadaniaPage() {
	const zadania = await prisma.zadanie.findMany({
		orderBy: { createdAt: 'desc' },
	});

	return (
		<main style={{ padding: '2rem' }}>
			<h1>Lista zadań</h1>

			<form action={dodajZadanie} style={{ marginBottom: '1.5rem' }}>
				<input
					name="tytul"
					type="text"
					placeholder="Nowe zadanie..."
					required
				/>
				<button type="submit">Dodaj</button>
			</form>

			{zadania.length === 0 && <p>Brak zadań — dodaj pierwsze powyżej.</p>}

			<ul>
				{zadania.map((zadanie) => (
					<li key={zadanie.id}>
						<span
							style={{
								textDecoration: zadanie.zrobione ? 'line-through' : 'none',
							}}
						>
							{zadanie.tytul}
						</span>

						<form
							action={przelaczZrobione.bind(null, zadanie.id, zadanie.zrobione)}
							style={{ display: 'inline' }}
						>
							<button type="submit">
								{zadanie.zrobione ? 'Cofnij' : 'Zrobione'}
							</button>
						</form>

						<form
							action={usunZadanie.bind(null, zadanie.id)}
							style={{ display: 'inline' }}
						>
							<button type="submit">Usuń</button>
						</form>
					</li>
				))}
			</ul>
		</main>
	);
}

