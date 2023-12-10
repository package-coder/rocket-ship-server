import * as TypeGraphQL from "type-graphql";

export enum BookingsScalarFieldEnum {
  id = "id",
  customer_id = "customer_id",
  user_id = "user_id",
  vehicle_id = "vehicle_id",
  driver_id = "driver_id",
  pickup = "pickup",
  dropoff = "dropoff",
  duration = "duration",
  pickup_addr_id = "pickup_addr_id",
  dest_addr_id = "dest_addr_id",
  dest_name = "dest_name",
  dest_contact = "dest_contact",
  note = "note",
  parcel_type = "parcel_type",
  parcel_weight = "parcel_weight",
  travellers = "travellers",
  cancellation = "cancellation",
  status = "status",
  payment = "payment",
  created_at = "created_at",
  updated_at = "updated_at",
  deleted_at = "deleted_at"
}
TypeGraphQL.registerEnumType(BookingsScalarFieldEnum, {
  name: "BookingsScalarFieldEnum",
  description: undefined,
});
