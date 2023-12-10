import * as TypeGraphQL from "type-graphql";
import { BookingsOrderByInput } from "../../../input/BookingsOrderByInput";
import { BookingsScalarFieldEnum } from "../../../enums/BookingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyBookingsArgs {
  @TypeGraphQL.Field(_type => [BookingsOrderByInput], {
    nullable: true
  })
  orderBy?: BookingsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => [BookingsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "customer_id" | "user_id" | "vehicle_id" | "driver_id" | "pickup" | "dropoff" | "duration" | "pickup_addr_id" | "dest_addr_id" | "dest_name" | "dest_contact" | "note" | "parcel_type" | "parcel_weight" | "travellers" | "cancellation" | "status" | "payment" | "created_at" | "updated_at" | "deleted_at"> | undefined;
}
