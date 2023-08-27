import supabase from "./supabase";

export async function OpenPositions() {
  const { data: positions, error } = await supabase
    .from("OpenPositions")
    .select("*");

  if (error) {
    console.log(error);
  }

  return positions;
}
