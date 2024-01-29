import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import EducationComponent from "./education";
import RadioGroupWithDescriptions from "./Avalibility";
import YourComponent from "./Role";

const ResumeForm = () => {
  return (
    <div className="bg-gray-200 shadow overflow-hidden sm:rounded-lg">
      <form className="max-w-3xl mx-auto mt-8">
        <div className="space-y-12 text-black">
          <div className="bg-gray-200 rounded-md p-8 border border-gray-700">
            <h2 className="text-lg font-semibold leading-7 text-black mb-4 border-b border-black">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-black text-sm font-medium leading-6"
                >
                  Username
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-800 sm:text-sm">
                      workcation.com/
                    </span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-800  focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="janesmith"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about yourself.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon
                    className="h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md p-8 border border-gray-700">
            <h2 className="text-lg font-semibold leading-7 text-black mb-4 border-b border-black">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-black">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-1 sm:col-start-1">
                <label
                  htmlFor="cCode"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country Code
                </label>
                <div className="mt-2">
                  <select
                    id="cCode"
                    name="cCode"
                    autoComplete="country-code"
                    placeholder="Select Country Code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>+93 - Afghanistan</option>
                    <option>+355 - Albania</option>
                    <option>+213 - Algeria</option>
                    <option>+376 - Andorra</option>
                    <option>+244 - Angola</option>
                    <option>+1 - Antigua and Barbuda</option>
                    <option>+54 - Argentina</option>
                    <option>+374 - Armenia</option>
                    <option>+61 - Australia</option>
                    <option>+43 - Austria</option>
                    <option>+994 - Azerbaijan</option>
                    <option>+1 - Bahamas</option>
                    <option>+973 - Bahrain</option>
                    <option>+880 - Bangladesh</option>
                    <option>+1 - Barbados</option>
                    <option>+375 - Belarus</option>
                    <option>+32 - Belgium</option>
                    <option>+501 - Belize</option>
                    <option>+229 - Benin</option>
                    <option>+975 - Bhutan</option>
                    <option>+591 - Bolivia</option>
                    <option>+387 - Bosnia and Herzegovina</option>
                    <option>+267 - Botswana</option>
                    <option>+55 - Brazil</option>
                    <option>+673 - Brunei</option>
                    <option>+359 - Bulgaria</option>
                    <option>+226 - Burkina Faso</option>
                    <option>+257 - Burundi</option>
                    <option>+238 - Cabo Verde</option>
                    <option>+855 - Cambodia</option>
                    <option>+237 - Cameroon</option>
                    <option>+1 - Canada</option>
                    <option>+236 - Central African Republic</option>
                    <option>+235 - Chad</option>
                    <option>+56 - Chile</option>
                    <option>+86 - China</option>
                    <option>+57 - Colombia</option>
                    <option>+269 - Comoros</option>
                    <option>+242 - Congo</option>
                    <option>+506 - Costa Rica</option>
                    <option>+385 - Croatia</option>
                    <option>+53 - Cuba</option>
                    <option>+357 - Cyprus</option>
                    <option>+420 - Czechia</option>
                    <option>+45 - Denmark</option>
                    <option>+253 - Djibouti</option>
                    <option>+1 - Dominica</option>
                    <option>+1 - Dominican Republic</option>
                    <option>+670 - East Timor (Timor-Leste)</option>
                    <option>+593 - Ecuador</option>
                    <option>+20 - Egypt</option>
                    <option>+503 - El Salvador</option>
                    <option>+240 - Equatorial Guinea</option>
                    <option>+291 - Eritrea</option>
                    <option>+372 - Estonia</option>
                    <option>+268 - Eswatini</option>
                    <option>+251 - Ethiopia</option>
                    <option>+679 - Fiji</option>
                    <option>+358 - Finland</option>
                    <option>+33 - France</option>
                    <option>+241 - Gabon</option>
                    <option>+220 - Gambia</option>
                    <option>+995 - Georgia</option>
                    <option>+49 - Germany</option>
                    <option>+233 - Ghana</option>
                    <option>+30 - Greece</option>
                    <option>+1 - Grenada</option>
                    <option>+502 - Guatemala</option>
                    <option>+224 - Guinea</option>
                    <option>+245 - Guinea-Bissau</option>
                    <option>+592 - Guyana</option>
                    <option>+509 - Haiti</option>
                    <option>+504 - Honduras</option>
                    <option>+36 - Hungary</option>
                    <option>+354 - Iceland</option>
                    <option>+91 - India</option>
                    <option>+62 - Indonesia</option>
                    <option>+98 - Iran</option>
                    <option>+964 - Iraq</option>
                    <option>+353 - Ireland</option>
                    <option>+972 - Israel</option>
                    <option>+39 - Italy</option>
                    <option>+1 - Jamaica</option>
                    <option>+81 - Japan</option>
                    <option>+962 - Jordan</option>
                    <option>+7 - Kazakhstan</option>
                    <option>+254 - Kenya</option>
                    <option>+686 - Kiribati</option>
                    <option>+850 - Korea, North</option>
                    <option>+82 - Korea, South</option>
                    <option>+383 - Kosovo</option>
                    <option>+965 - Kuwait</option>
                    <option>+996 - Kyrgyzstan</option>
                    <option>+856 - Laos</option>
                    <option>+371 - Latvia</option>
                    <option>+961 - Lebanon</option>
                    <option>+266 - Lesotho</option>
                    <option>+231 - Liberia</option>
                    <option>+218 - Libya</option>
                    <option>+423 - Liechtenstein</option>
                    <option>+370 - Lithuania</option>
                    <option>+352 - Luxembourg</option>
                    <option>+261 - Madagascar</option>
                    <option>+265 - Malawi</option>
                    <option>+60 - Malaysia</option>
                    <option>+960 - Maldives</option>
                    <option>+223 - Mali</option>
                    <option>+356 - Malta</option>
                    <option>+692 - Marshall Islands</option>
                    <option>+222 - Mauritania</option>
                    <option>+230 - Mauritius</option>
                    <option>+52 - Mexico</option>
                    <option>+691 - Micronesia</option>
                    <option>+373 - Moldova</option>
                    <option>+377 - Monaco</option>
                    <option>+976 - Mongolia</option>
                    <option>+382 - Montenegro</option>
                    <option>+212 - Morocco</option>
                    <option>+258 - Mozambique</option>
                    <option>+95 - Myanmar</option>
                    <option>+264 - Namibia</option>
                    <option>+674 - Nauru</option>
                    <option>+977 - Nepal</option>
                    <option>+31 - Netherlands</option>
                    <option>+64 - New Zealand</option>
                    <option>+505 - Nicaragua</option>
                    <option>+227 - Niger</option>
                    <option>+234 - Nigeria</option>
                    <option>+389 - North Macedonia (formerly Macedonia)</option>
                    <option>+47 - Norway</option>
                    <option>+968 - Oman</option>
                    <option>+92 - Pakistan</option>
                    <option>+680 - Palau</option>
                    <option>+507 - Panama</option>
                    <option>+675 - Papua New Guinea</option>
                    <option>+595 - Paraguay</option>
                    <option>+51 - Peru</option>
                    <option>+63 - Philippines</option>
                    <option>+48 - Poland</option>
                    <option>+351 - Portugal</option>
                    <option>+974 - Qatar</option>
                    <option>+40 - Romania</option>
                    <option>+7 - Russia</option>
                    <option>+250 - Rwanda</option>
                    <option>+1 - Saint Kitts and Nevis</option>
                    <option>+1 - Saint Lucia</option>
                    <option>+1 - Saint Vincent and the Grenadines</option>
                    <option>+685 - Samoa</option>
                    <option>+378 - San Marino</option>
                    <option>+239 - Sao Tome and Principe</option>
                    <option>+966 - Saudi Arabia</option>
                    <option>+221 - Senegal</option>
                    <option>+381 - Serbia</option>
                    <option>+248 - Seychelles</option>
                    <option>+232 - Sierra Leone</option>
                    <option>+65 - Singapore</option>
                    <option>+421 - Slovakia</option>
                    <option>+386 - Slovenia</option>
                    <option>+677 - Solomon Islands</option>
                    <option>+252 - Somalia</option>
                    <option>+27 - South Africa</option>
                    <option>+211 - South Sudan</option>
                    <option>+34 - Spain</option>
                    <option>+94 - Sri Lanka</option>
                    <option>+249 - Sudan</option>
                    <option>+597 - Suriname</option>
                    <option>+46 - Sweden</option>
                    <option>+41 - Switzerland</option>
                    <option>+963 - Syria</option>
                    <option>+886 - Taiwan</option>
                    <option>+992 - Tajikistan</option>
                    <option>+255 - Tanzania</option>
                    <option>+66 - Thailand</option>
                    <option>+228 - Togo</option>
                    <option>+676 - Tonga</option>
                    <option>+1 - Trinidad and Tobago</option>
                    <option>+216 - Tunisia</option>
                    <option>+90 - Turkey</option>
                    <option>+993 - Turkmenistan</option>
                    <option>+688 - Tuvalu</option>
                    <option>+256 - Uganda</option>
                    <option>+380 - Ukraine</option>
                    <option>+971 - United Arab Emirates</option>
                    <option>+44 - United Kingdom</option>
                    <option>+1 - United States</option>
                    <option>+598 - Uruguay</option>
                    <option>+998 - Uzbekistan</option>
                    <option>+678 - Vanuatu</option>
                    <option>+379 - Vatican City</option>
                    <option>+58 - Venezuela</option>
                    <option>+84 - Vietnam</option>
                    <option>+967 - Yemen</option>
                    <option>+260 - Zambia</option>
                    <option>+263 - Zimbabwe</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="Contact"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="Contact"
                    name="Contact"
                    type="tel"
                    autoComplete="tel-national"
                    maxLength={10}
                    placeholder="Enter your phone number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter Email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    placeholder="Select Country"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Select Country</option>
                    <option>Afghanistan</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                    <option>Andorra</option>
                    <option>Angola</option>
                    <option>Antigua and Barbuda</option>
                    <option>Argentina</option>
                    <option>Armenia</option>
                    <option>Australia</option>
                    <option>Austria</option>
                    <option>Azerbaijan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                    <option>Bangladesh</option>
                    <option>Barbados</option>
                    <option>Belarus</option>
                    <option>Belgium</option>
                    <option>Belize</option>
                    <option>Benin</option>
                    <option>Bhutan</option>
                    <option>Bolivia</option>
                    <option>Bosnia and Herzegovina</option>
                    <option>Botswana</option>
                    <option>Brazil</option>
                    <option>Brunei</option>
                    <option>Bulgaria</option>
                    <option>Burkina Faso</option>
                    <option>Burundi</option>
                    <option>Cabo Verde</option>
                    <option>Cambodia</option>
                    <option>Cameroon</option>
                    <option>Canada</option>
                    <option>Central African Republic</option>
                    <option>Chad</option>
                    <option>Chile</option>
                    <option>China</option>
                    <option>Colombia</option>
                    <option>Comoros</option>
                    <option>Congo</option>
                    <option>Costa Rica</option>
                    <option>Croatia</option>
                    <option>Cuba</option>
                    <option>Cyprus</option>
                    <option>Czechia</option>
                    <option>Denmark</option>
                    <option>Djibouti</option>
                    <option>Dominica</option>
                    <option>Dominican Republic</option>
                    <option>East Timor (Timor-Leste)</option>
                    <option>Ecuador</option>
                    <option>Egypt</option>
                    <option>El Salvador</option>
                    <option>Equatorial Guinea</option>
                    <option>Eritrea</option>
                    <option>Estonia</option>
                    <option>Eswatini</option>
                    <option>Ethiopia</option>
                    <option>Fiji</option>
                    <option>Finland</option>
                    <option>France</option>
                    <option>Gabon</option>
                    <option>Gambia</option>
                    <option>Georgia</option>
                    <option>Germany</option>
                    <option>Ghana</option>
                    <option>Greece</option>
                    <option>Grenada</option>
                    <option>Guatemala</option>
                    <option>Guinea</option>
                    <option>Guinea-Bissau</option>
                    <option>Guyana</option>
                    <option>Haiti</option>
                    <option>Honduras</option>
                    <option>Hungary</option>
                    <option>Iceland</option>
                    <option>India</option>
                    <option>Indonesia</option>
                    <option>Iran</option>
                    <option>Iraq</option>
                    <option>Ireland</option>
                    <option>Israel</option>
                    <option>Italy</option>
                    <option>Jamaica</option>
                    <option>Japan</option>
                    <option>Jordan</option>
                    <option>Kazakhstan</option>
                    <option>Kenya</option>
                    <option>Kiribati</option>
                    <option>Korea, North</option>
                    <option>Korea, South</option>
                    <option>Kosovo</option>
                    <option>Kuwait</option>
                    <option>Kyrgyzstan</option>
                    <option>Laos</option>
                    <option>Latvia</option>
                    <option>Lebanon</option>
                    <option>Lesotho</option>
                    <option>Liberia</option>
                    <option>Libya</option>
                    <option>Liechtenstein</option>
                    <option>Lithuania</option>
                    <option>Luxembourg</option>
                    <option>Madagascar</option>
                    <option>Malawi</option>
                    <option>Malaysia</option>
                    <option>Maldives</option>
                    <option>Mali</option>
                    <option>Malta</option>
                    <option>Marshall Islands</option>
                    <option>Mauritania</option>
                    <option>Mauritius</option>
                    <option>Mexico</option>
                    <option>Micronesia</option>
                    <option>Moldova</option>
                    <option>Monaco</option>
                    <option>Mongolia</option>
                    <option>Montenegro</option>
                    <option>Morocco</option>
                    <option>Mozambique</option>
                    <option>Myanmar</option>
                    <option>Namibia</option>
                    <option>Nauru</option>
                    <option>Nepal</option>
                    <option>Netherlands</option>
                    <option>New Zealand</option>
                    <option>Nicaragua</option>
                    <option>Niger</option>
                    <option>Nigeria</option>
                    <option>North Macedonia (formerly Macedonia)</option>
                    <option>Norway</option>
                    <option>Oman</option>
                    <option>Pakistan</option>
                    <option>Palau</option>
                    <option>Panama</option>
                    <option>Papua New Guinea</option>
                    <option>Paraguay</option>
                    <option>Peru</option>
                    <option>Philippines</option>
                    <option>Poland</option>
                    <option>Portugal</option>
                    <option>Qatar</option>
                    <option>Romania</option>
                    <option>Russia</option>
                    <option>Rwanda</option>
                    <option>Saint Kitts and Nevis</option>
                    <option>Saint Lucia</option>
                    <option>Saint Vincent and the Grenadines</option>
                    <option>Samoa</option>
                    <option>San Marino</option>
                    <option>Sao Tome and Principe</option>
                    <option>Saudi Arabia</option>
                    <option>Senegal</option>
                    <option>Serbia</option>
                    <option>Seychelles</option>
                    <option>Sierra Leone</option>
                    <option>Singapore</option>
                    <option>Slovakia</option>
                    <option>Slovenia</option>
                    <option>Solomon Islands</option>
                    <option>Somalia</option>
                    <option>South Africa</option>
                    <option>South Sudan</option>
                    <option>Spain</option>
                    <option>Sri Lanka</option>
                    <option>Sudan</option>
                    <option>Suriname</option>
                    <option>Sweden</option>
                    <option>Switzerland</option>
                    <option>Syria</option>
                    <option>Taiwan</option>
                    <option>Tajikistan</option>
                    <option>Tanzania</option>
                    <option>Thailand</option>
                    <option>Togo</option>
                    <option>Tonga</option>
                    <option>Trinidad and Tobago</option>
                    <option>Tunisia</option>
                    <option>Turkey</option>
                    <option>Turkmenistan</option>
                    <option>Tuvalu</option>
                    <option>Uganda</option>
                    <option>Ukraine</option>
                    <option>United Arab Emirates</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Uruguay</option>
                    <option>Uzbekistan</option>
                    <option>Vanuatu</option>
                    <option>Vatican City</option>
                    <option>Venezuela</option>
                    <option>Vietnam</option>
                    <option>Yemen</option>
                    <option>Zambia</option>
                    <option>Zimbabwe</option>
                  </select>
                </div>

                <EducationComponent />
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  House No./Flat
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Locality
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <h1 className="col-span-full ">
                How many years of full-time engineering work experience do you
                have?
              </h1>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Years of Experirnce
                </label>
                <div className="mt-2">
                  <input
                    id="experience"
                    name="experience"
                    type="number"
                    // autoComplete="tel-national"
                    // maxLength={13}
                    // placeholder="Enter your phone number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 ">
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Years of Remote Experirnce
                </label>
                <div className="mt-2">
                  <input
                    id="experience"
                    name="experience"
                    type="number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <fieldset>
              <legend className="text-sm pt-10 font-semibold leading-6 text-gray-900">
                Do you have prior freelance experience?
              </legend>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p> */}
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    No
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm pt-10 font-semibold leading-6 text-gray-900">
                How's your English?
              </legend>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p> */}
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Basic
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Average
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Advance
                  </label>
                </div>
                <RadioGroupWithDescriptions />
                <YourComponent />
              </div>
            </fieldset>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Notifications
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>

            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  By Email
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-900"
                      >
                        Comments
                      </label>
                      <p className="text-gray-500">
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-900"
                      >
                        Candidates
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-900"
                      >
                        Offers
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate accepts or rejects an
                        offer.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offse focus-visible:outline-indigo-600 border-2 border-indigo-950"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2 border-indigo-950"
          >
            Submit
          </button>
        </div>
      </form>
      
    </div>
  );
};
export default ResumeForm;
