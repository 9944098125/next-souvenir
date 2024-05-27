import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: { qaId: string } }
) {
	const qaId = params.qaId;
	console.log(qaId);
	return NextResponse.json(
		{ message: `Request Params is ${qaId}` },
		{ status: 200 }
	);
}
