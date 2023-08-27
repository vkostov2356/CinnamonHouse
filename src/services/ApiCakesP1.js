/* eslint-disable no-unused-vars */
import supabase from "./supabase";

export async function getCakesP1() {
  const { data: dataP1, error: errorP1 } = await supabase
    .from("CakesPage1")
    .select("*");

  if (errorP1) {
    console.log(errorP1);
  }

  return dataP1;
}
