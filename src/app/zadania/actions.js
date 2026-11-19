'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { z } from "zod";

const ZadanieSchema = z.object({
	tytul: z.string().trim().min(3, 'Tytuł musi mieć co najmniej 3 znaki.').max(100),
});

export async function dodajZadanie(formData) {
	const wynik = ZadanieSchema.safeParse({ tytul: formData.get('tytul') });

	if (!wynik.success) {
		return { success: false, message: wynik.error.issues[0].message };
	}

	await prisma.zadanie.create({ data: wynik.data });
	revalidatePath('/zadania');
	return { success: true, message: 'Dodano zadanie.' };
}

export async function przelaczZrobione(id, aktualnyStan) {
	await prisma.zadanie.update({
		where: { id },
		data: { zrobione: !aktualnyStan },
	});
	revalidatePath('/zadania');
}

export async function usunZadanie(id) {
	await prisma.zadanie.delete({ where: { id } });
	revalidatePath('/zadania');
}

