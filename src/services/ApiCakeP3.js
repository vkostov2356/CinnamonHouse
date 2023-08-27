import supabase from "./supabase";

export async function getCakesP3() {
  const { data: dataP3, error: errorP3 } = await supabase
    .from("CakePage3")
    .select("*");

  if (errorP3) {
    console.log(errorP3);
  }

  return dataP3;
}
