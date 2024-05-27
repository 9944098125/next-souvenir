import Link from "next/link";
import React from "react";

type HeadingProps = {
	heading: string;
	desc: string;
	link: string;
	linkText: string;
};

const Heading = (props: HeadingProps) => {
	const { heading, desc, link, linkText } = props;
	return (
		<React.Fragment>
			<div className="w-full flex flex-col items-center justify-center">
				<h3 className="text-3xl font-extrabold text-blue-900">{heading}</h3>
				<p className="text-yellow-700 text-lg">
					{desc}
					<span className="text-red font-bold hover:underline">
						<Link href={link}>{linkText}</Link>
					</span>
				</p>
			</div>
		</React.Fragment>
	);
};

export default Heading;
