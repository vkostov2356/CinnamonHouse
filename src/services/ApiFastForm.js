import supabase from "./supabase";

export async function createFastForm(receivedDetails) {
  const { data, error } = await supabase
    .from("FastOrders")
    .insert(receivedDetails[0]);

  if (data) {
    console.log(error);
  }

  return data;
}
