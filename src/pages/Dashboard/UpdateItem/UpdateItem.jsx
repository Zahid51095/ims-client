import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const UpdateItem = () => {
    const { name, category, description, price, _id } = useLoaderData();

    const { register, handleSubmit, reset } = useForm();

   

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
       const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
    if(res.data.success){
        const ProductItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            description: data.description,
            image: res.data.data.display_url
        }
        const ProductRes = await axiosSecure.patch(`/items/${_id}`, ProductItem);
        console.log(ProductRes.data);
        if(ProductRes.data.modifiedCount > 0){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is updated to the Product items.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
        console.log(res.data);
    };


    return (
        <div>
            <SectionTitle heading="Update Product" subHeading="Make Your Own"></SectionTitle>
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Product Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Product Name"
              {...register("name", {required: true})}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* catergory */}

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select defaultValue={category}
                {...register("category", {required: true})}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="book">Book</option>
                <option value="mobile">Mobile</option>
                <option value="cloth">Cloth</option>
                <option value="shoe">Shoe</option>
                <option value="doll">Doll</option>
              </select>
            </div>

            {/* price */}

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register("price", {required: true})}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Details</span>
            </label>
            <textarea
              {...register('description')}
              className="textarea textarea-bordered h-24"
              defaultValue={description}
              placeholder="details"
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
          <input {...register('image', {required: true})} type="file" className="file-input w-full max-w-xs" />
          </div>
          <button className="btn bg-yellow-500">Update Product</button>
        </form>
      </div>
        </div>
    );
};

export default UpdateItem;