import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Msc. Computer Science </td>
								<td>Ongoing</td>
								<td>
									<Link to='https://www.su.se/english/search-courses-and-programmes/smefo-1.411367' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Backend Development </td>
								<td>2024</td>
								<td>
									<Link to='https://www.noroff.no/en/studies/vocational-school/back-end-development' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Network and Information Security </td>
								<td>2023</td>
								<td>
									<Link to='https://www.noroff.no/en/studies/vocational-school/network-it-security' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Other</td>
								<td>Dec 2018</td>
								<td>
									<Link to='/details' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
