import supabase from "./supabase";

export async function getCupcakesP1() {
  const { data: dataP1, error: errorP1 } = await supabase
    .from("CupcakePage1")
    .select("*");

  if (errorP1) {
    console.log(errorP1);
  }

  return dataP1;
}

export async function getCupcakesP2() {
  const { data: dataP2, error: errorP2 } = await supabase
    .from("CupcakePage2")
    .select("*");

  if (errorP2) {
    console.log(errorP2);
  }

  return dataP2;
}

export async function getCupcakesP3() {
  const { data: dataP3, error: errorP3 } = await supabase
    .from("CupcakePage3")
    .select("*");

  if (errorP3) {
    console.log(errorP3);
  }

  return dataP3;
}
