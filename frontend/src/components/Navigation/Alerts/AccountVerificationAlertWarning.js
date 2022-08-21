import { useDispatch, useSelector } from "react-redux";
import { ExclamationIcon } from "@heroicons/react/solid";
import { accVerificationSendTokenAction } from "../../../redux/slices/accountVerification/accVerificationSlices";

export default function AccountVerificationAlertWarning() {
  const dispatch = useDispatch();
  return (
    <div className="bg-red-500 border-l-4 border-yellow-400 p-1">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon
            className="h-5 w-5 text-yellow-500"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm text-white">
            Your account is not yet verified. {" "}
            <button
              onClick={() => dispatch(accVerificationSendTokenAction())}
              className="font-medium underline text-blue-800 hover:text-white"
            >
              Click this link to verify your account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
