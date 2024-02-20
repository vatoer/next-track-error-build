import { dbAppointment } from "@/lib/db-appointment";
import { getServices } from "./_actions";

const ServicePage = async () => {
  const services = await getServices();

  return (
    <div className="w-full items-center">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-900">Pelayanan Paspor</h1>
        <h1 className="text-xl font-bold text-gray-900 m-5">
          Persyaratan Umum
        </h1>
      </div>
      <h1 className="text-center text-xl font-bold text-gray-900 m-10">
        Pilih layanan yang anda butuhkan
      </h1>
      <div className="w-full grid md:grid-cols-3 gap-8 ">
        <div>card disini</div>
      </div>
      <h1 className="text-center text-xl font-bold text-gray-900 m-10">
        Biaya Layanan
      </h1>
    </div>
  );
};
export default ServicePage;
