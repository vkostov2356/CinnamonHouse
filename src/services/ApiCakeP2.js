import supabase from "./supabase";

export async function getCakesP2() {
  const { data: dataP2, error: errorP2 } = await supabase
    .from("CakePage2")
    .select("*");

  if (errorP2) {
    console.log(errorP2);
  }

  return dataP2;
}
