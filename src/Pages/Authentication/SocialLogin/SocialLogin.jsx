import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";


const SocialLogin = () => {
    return (
        <div>
         <div className="divider mx-10">Or</div>
            <div className="flex flex-col mx-6">
            <button className="flex justify-left items-center gap-4 mx-4 py-2 px-4 text-center border text-black rounded-md font-semibold">
            <FaGoogle /> Login with Google </button>
            </div>
            <div className="flex flex-col mx-6">
            <button className="flex justify-left items-center gap-4 my-2 mx-4 py-2 px-4 text-center border text-black rounded-md font-semibold">
            <FaFacebook></FaFacebook> Login with Facebook </button>
            </div>
            <div className="flex flex-col mx-6">
            <button className="flex justify-left items-center gap-4 mx-4 py-2 px-4 text-center border text-black rounded-md font-semibold">
            <FaGithub /> Login with GitHub </button>
            </div>
        </div>
    );
};

export default SocialLogin;