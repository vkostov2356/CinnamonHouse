import supabase from "./supabase";

export async function getDonutsP1() {
  const { data: dataP1, error: errorP1 } = await supabase
    .from("DonutsPage1")
    .select("*");

  if (errorP1) {
    console.log(errorP1);
  }

  return dataP1;
}

export async function getDonutsP2() {
  const { data: dataP2, error: errorP2 } = await supabase
    .from("DonutsPage2")
    .select("*");

  if (errorP2) {
    console.log(errorP2);
  }

  return dataP2;
}
