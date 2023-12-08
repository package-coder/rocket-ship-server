import * as TypeGraphQL from "type-graphql";
import { BookingsOrderByWithRelationInput } from "../../../input/BookingsOrderByWithRelationInput";
import { BookingsWhereInput } from "../../../input/BookingsWhereInput";
import { BookingsScalarFieldEnum } from "../../../enums/BookingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyBookingsArgs {
  @TypeGraphQL.Field(_type => BookingsWhereInput, {
    nullable: true
  })
  where?: BookingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookingsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BookingsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => [BookingsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "customer_id" | "user_id" | "vehicle_id" | "driver_id" | "pickup" | "dropoff" | "duration" | "pickup_addr" | "dest_addr" | "dest_name" | "dest_contact" | "note" | "parcel_type" | "parcel_weight" | "travellers" | "cancellation" | "status" | "payment" | "created_at" | "updated_at" | "deleted_at"> | undefined;
}
