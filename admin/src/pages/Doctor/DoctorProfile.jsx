import { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";

const DoctorProfile = () => {
  // eslint-disable-next-line no-unused-vars
  const { dToken, profileData, setProfileData, getProfileData } =
    useContext(DoctorContext);
  // eslint-disable-next-line no-unused-vars
  const { currency, backendUrl } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    profileData && (
      <div>
        <div className="flex flex-col m-5 gap-4">
          <div>
            <img
              className="bg-primary/80 w-full sm:max-w-64 rounded-lg "
              src={profileData.image}
              alt=""
            />
          </div>
          <div className="dlex-1 border border-stone-100 rounded-lg py-7 bg-white">
            {/*----Doc Info : name,degree, experience */}
            <p>{profileData.name}</p>
            <div>
              <p>
                {profileData.degree} - {profileData.speciality}
              </p>
              <button>{profileData.experience}</button>
            </div>

            <div>
              <p>About:</p>
              <p>{profileData.about}</p>
            </div>
            <p>
              Appointment fee:{" "}
              <span>
                {currency} {profileData.fees}
              </span>
            </p>

            <div>
              <p>Address:</p>
              <p>
                {profileData.address.line1}
                <br />
                {profileData.address.line2}
              </p>
            </div>

            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Available</label>
            </div>

            <button>Edit Profile</button>
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
