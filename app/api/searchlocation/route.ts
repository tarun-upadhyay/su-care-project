import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

let searchMainUrl =
  "https://autosuggest.search.hereapi.com/v1/autosuggest?apiKey=O3Wnf_HK4Ok40ugwjObJCWU626Q8p9gJ0kJiiYaavAA&limit=5";

let delhi = `&in=bbox:76.831787,28.499409,77.345398,28.898128`;
let Gurgaon = `&in=bbox:76.847259,28.30446,77.126724,28.532131`;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const qValue = url.searchParams.get("q");
  const location = url.searchParams.get("loc");

  let conditionalUrl = searchMainUrl;
  if (location == "delhi") {
    conditionalUrl += delhi;
    conditionalUrl += `&q=${qValue}`;
  } else {
    conditionalUrl += Gurgaon;
    conditionalUrl += `&q=${qValue}`;
  }

  let data = await axios.get(conditionalUrl).then((res) => res.data);

  try {
    return NextResponse.json(data.items, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
