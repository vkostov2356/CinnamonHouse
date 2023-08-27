import supabase from "./supabase";

export async function createOrder(receivedDetails) {
  const { data, error } = await supabase
    .from("Orders")
    .insert(receivedDetails[0]);

  if (data) {
    console.log(error);
  }

  return data;
}
