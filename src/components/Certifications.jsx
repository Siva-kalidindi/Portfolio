import React from "react";
import { motion } from "framer-motion";
import { BadgeCheckIcon } from "lucide-react";

const certs = [
	{
		title: "ServiceNow Certified System Administrator (CSA)",
		issuer: "ServiceNow",
		year: 2024,
	},
	{
		title: "ServiceNow Certified Application Developer (CAD)",
		issuer: "ServiceNow",
		year: 2024,
	},
];

export default function Certifications() {
	return (
		<>
			<section
				id="certifications"
				className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
			>
				<div className="max-w-3xl mx-auto px-4">
					<motion.h2
						initial={{ opacity: 0, y: 25 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ type: "spring", stiffness: 60, damping: 14 }}
						className="text-3xl font-bold mb-8 text-center text-white drop-shadow-[0_0_16px_#3b82f6]"
					>
						Certifications
					</motion.h2>
					<ul className="space-y-8">
						{certs.map((cert, idx) => (
							<motion.li
								key={idx}
								initial={{ opacity: 0, x: -30, scale: 0.95 }}
								whileInView={{ opacity: 1, x: 0, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.1 }}
								className="flex items-start gap-4 bg-gray-800 p-6 rounded-2xl shadow-xl border border-blue-900
                  hover:scale-105 hover:shadow-[0_0_16px_#3b82f6] transition-all duration-300
                  hover:border-blue-400 hover:drop-shadow-[0_0_12px_#3b82f6]"
								style={{
									boxShadow: "0 2px 12px 0 #1e293b, 0 0 12px #3b82f6",
									perspective: "800px",
								}}
							>
								<BadgeCheckIcon
									size={24}
									className="text-blue-400 shrink-0 drop-shadow-[0_0_8px_#3b82f6]"
								/>
								<div>
									<h3 className="font-semibold text-lg mb-1 text-white">
										{cert.title}
									</h3>
									<p className="text-sm text-blue-200">
										{cert.issuer} • {cert.year}
									</p>
								</div>
							</motion.li>
						))}
					</ul>
				</div>
			</section>
			<div className="h-16 w-full bg-gradient-to-b from-gray-900 via-blue-100 to-white -mt-16" />
		</>
	);
}