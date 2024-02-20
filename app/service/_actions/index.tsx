"use server";
import { dbAppointment } from "@/lib/db-appointment";
import { Prisma } from "@/prisma/db-appointment/generated/client";

export interface IBookServiceParams {
  serviceId: string;
}

export const bookService = async (serviceId: string) => {
  console.log("Book Service");
  try {
    const bookedService = await dbAppointment.bookedService.create({
      data: {
        serviceId,
        createdBy: "tes",
      },
    });

    const formToFill = await dbAppointment.formsForService.findMany({
      where: {
        serviceId,
      },
      orderBy: {
        formOrder: "asc",
      },
      select: {
        formId: true,
      },
    });

    return {
      type: "CREATE_BOOKING",
      payload: {
        data: bookedService,
        formToFill,
      },
      errors: false,
    };
  } catch (error) {
    console.log(error);
    let errorCode = "UNKNOWN_ERROR";
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error);
      //errorMessage = error.message;
      errorCode = error.code;
    }

    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      console.log(error);
      errorCode = "URE001";
    }

    return {
      type: "CREATE_BOOKING",
      payload: {},
      errors: errorCode,
    };
  }
};

export const getServices = async () => {
  try {
    const services = await dbAppointment.service.findMany({
      where: {
        categoryId: "paspor",
      },
      include: {
        ServiceRequirement: true,
      },
    });

    return {
      type: "GET_SERVICES",
      payload: services,
      errors: false,
    };
  } catch (error) {
    console.log(error);
    return {
      type: "GET_SERVICES",
      payload: {},
      errors: "UNKNOWN_ERROR",
    };
  }
};
