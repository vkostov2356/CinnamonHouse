import supabase from "./supabase";

export async function getCakePopsP1() {
  const { data: dataP1, error: errorP1 } = await supabase
    .from("CakePopsPage1")
    .select("*");

  if (errorP1) {
    console.log(errorP1);
  }

  return dataP1;
}

export async function getCakePopsP2() {
  const { data: dataP2, error: errorP2 } = await supabase
    .from("CakePopsPage2")
    .select("*");

  if (errorP2) {
    console.log(errorP2);
  }

  return dataP2;
}
