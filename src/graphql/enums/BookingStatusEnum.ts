import * as TypeGraphQL from "type-graphql";

export enum BookingStatusEnum {
    PENDING = "PENDING",
    ASSIGNED = "ASSIGNED",
    IN_TRANSIT = "IN_TRANSIT",
    DELIVERED = "DELIVERED",
    CANCELED = "CANCELED"
}
TypeGraphQL.registerEnumType(BookingStatusEnum, {
  name: "BookingStatusEnum",
});
