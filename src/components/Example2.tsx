"use client";
import { useLayoutEffect, use, useCallback } from "react";
import Image from "next/image";


export const Demo2 = () => {
	//   useLayoutEffect(() => {
	// 		document?.querySelector<HTMLElement>('#demo1Title')?.focus();
	// 	}, []);

	const onNavigation = useCallback((url) => {
		var urlId = url.split('-')[1];

		const titleElement = document.getElementById(`title-${urlId}`);
		titleElement?.focus();
	}, []);

	return (
		<>
		 <div id="sidebar"> {/*aside*/}
            <h2>Indice</h2>
            <ul>
                <li><a href="#section-1" onClick={() => onNavigation("section-1")}>Sezione 1</a>
                    <ul>
                        <li><a href="#subsection-1.1" onClick={() => onNavigation("subsection-1.1")}>Sottosezione 1.1</a></li>
                    </ul>
                </li>
                <li><a href="#section-2" onClick={() => onNavigation("section-2")}>Sezione 2</a>
                    <ul>
                        <li><a href="#subsection-2.1" onClick={() => onNavigation("subsection-2.1")}>Sottosezione 2.1</a></li>
                        <li><a href="#subsection-2.2" onClick={() => onNavigation("subsection-2.2")}>Sottosezione 2.2</a></li>
                    </ul>
                </li>
            </ul>
        </div>
		<div id="content"> {/*main*/}
			<div id="section-1"> {/*section*/}
				<h2
					id="title-1"
					className="text-2xl font-semibold mb-3 mt-3"
					tabIndex={-1}
				>
					WCAG
				</h2>
				<p>
					<Image
						alt="Web Content Accessibility Guidelines"
						src="https://i0.wp.com/wcag.com/wp-content/uploads/2022/01/cropped-android-chrome-256x256-1.png?fit=512%2C512&ssl=1"
						width={200}
						height={150}
						className="float-right"
					/>
				</p>
				<div> {/*article*/}
					<h3 id="title-1.1" tabIndex={-1} className="text-1xl font-semibold mb-3 mt-3">What are WCAG?</h3>
					<p>
						The Web Content Accessibility Guidelines (WCAG) are part of a series of
						web accessibility guidelines published by the Web Accessibility
						Initiative (WAI) of the World Wide Web Consortium (W3C), the main
						international standards organization for the Internet. They are a set of
						recommendations for making Web content more accessible, primarily for
						people with disabilities—but also for all user agents, including highly
						limited devices, such as mobile phones. WCAG 2.0 was published in
						December 2008 and became an ISO standard, ISO/IEC 40500:2012 in October
						2012.[3] WCAG 2.2 became a W3C Recommendation on 5 October 2023.[1]
					</p>
				</div>
				<Image
					alt=""
					width={300}
					height={3}
					className="w-full h-1"
					src="https://courses.edx.org/assets/courseware/v1/69967b1855807933c080f1d765394c64/asset-v1:W3Cx+WAI0.1x+3T2019+type@asset+block/gray-line.png"
				/>
			</div>

			<div id="section-2"> {/*section*/}
				<h2 id="title-2" tabIndex={-1} className="text-2xl font-semibold mb-3 mt-3">
					Legislation
				</h2>
				<p>
					The disability rights movement advocates equal access to social,
					political, and economic life which includes not only physical access but
					access to the same tools, services, organizations and facilities as
					non-disabled people (e.g., museums[10][11]). Article 9 of the United
					Nations Convention on the Rights of Persons with Disabilities commits
					signatories to provide for full accessibility in their countries.[12]
				</p>
				<div id="subsection-2.1"> {/*article*/}
					<h3 id="title-2.1" tabIndex={-1} className="text-1xl font-semibold mb-3 mt-3">Official Logo</h3>
					<figure
						className="mw-default-size figure float-right"
						typeof="mw:File/Thumb"
					>
						<a
							href="/wiki/File:Handicapped_Accessible_sign.svg"
							className="mw-file-description"
						>
							<Image
								alt="white line figure of a person seated over the axis of a wheel, blue background"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Handicapped_Accessible_sign.svg/220px-Handicapped_Accessible_sign.svg.png"
								decoding="async"
								width="220"
								height="220"
								className="float-right"
							/>
						</a>
						<figcaption>
							This is the
							<a
								href="/wiki/International_Symbol_of_Access"
								title="International Symbol of Access"
							>
								internationally recognized symbol for accessibility
							</a>
							.
						</figcaption>
					</figure>
					<p>
						While it is often used to describe facilities or amenities to assist
						people with impaired mobility, through the provision of facilities like
						wheelchair ramps, the term can include other types of disability.
						Accessible facilities therefore extend to areas such as Braille signage,
						elevators, audio signals at pedestrian crossings, walkway contours,
						website accessibility and accessible publishing.[13]
					</p>
					<p>
						In the United States, government mandates including Section 508, WCAG,
						DDA are all enforcing practices to standardize accessibility testing
						engineering in product development.
					</p>
					<p>
						Accessibility modifications may be required to enable persons with
						disabilities to gain access to education, employment, transportation,
						housing, recreation, or even simply to exercise their right to vote.
					</p>
					<Image
						alt=""
						width={300}
						height={3}
						className="w-full h-1"
						src="https://courses.edx.org/assets/courseware/v1/69967b1855807933c080f1d765394c64/asset-v1:W3Cx+WAI0.1x+3T2019+type@asset+block/gray-line.png"
					/>
				</div>
				<div id="subsection-2.2"> {/*article*/}
					<h3 id="title-2.2" tabIndex={-1} className="text-1xl font-semibold mb-3 mt-3">
						Rules
					</h3>
					<p>
						In the United States, government mandates including Section 508, WCAG,
						<sup id="cite_ref-14" className="reference">
							<a href="#cite_note-14">[14]</a>
						</sup>{' '}
						DDA are all enforcing practices to standardize accessibility testing
						engineering in product development.
					</p>
				</div>
			</div>
		</div>
		</>
	);
};

