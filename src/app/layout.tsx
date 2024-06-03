'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './layout.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const exampleList = [
	{
		id: 'Demo1',
	},
	{
		id: 'Demo2',
	},
	{
		id: 'Demo3',
	},
	{
		id: 'Demo4',
	},
	{
		id: 'Demo5',
	},
	{
		id: 'Demo6',
	},
];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div id="container">
					<header className="bg-gray-300 p-6 border-b border-gray-300">
						<h1 className="text-3xl font-bold mb-4">Gilda Accessibilità</h1>
						<nav className="p-4 clearfix h-14">
							<div className="float-right w-1/8 p-1">
								<a
									href="#"
									className={[
										'text-white',
										styles['btn-search'],
										styles['pull-right'],
									].join(' ')}
								>
									<svg
										fill="#fff"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
										<path d="M0 0h24v24H0z" fill="none" />
									</svg>
									Search
								</a>
							</div>
							<div className="float-left container flex justify-between items-center  w-1/2 p-4">
								<ul className="flex space-x-4">
									{exampleList.map((ex) => {
										return (
											<li key={ex.id}>
												<Link
													href={`/example/${ex.id}`}
													className="text-white hover:bg-gray-700 hover:text-gray-200 px-3 py-2 rounded"
												>
													{ex.id}
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</nav>
					</header>

					{children}

					<footer id="footer" className={styles.footer}>
						<small>Copyright by Abletech S.r.l.</small>
						<small>Builded by ARXccessibility</small>
					</footer>
				</div>
			</body>
		</html>
	);
}
