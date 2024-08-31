import React from 'react';
import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle form submission here, e.g., send data to an API
  };

  return (
    <div id='RegStateup' className='     bg-[#BBA442] mt-10'>  


    <div className='bg-white  md:px-[200px] px-9 py-[150px] mx-auto container md:text-start  md:w-[1300px] w-auto text-start'>
      <h1 className='text-2xl font-bold font-primary'>Register your business on TSN</h1>
      <p className='font-semibold mt-3'>
Techpigeon Startups Network (TSN) Pakistan's online one-stop solution for business owners,entrepreneurs where they can have access to useful resources, world-class events and a network where they get exposure to help them grow their business.
Best business networking online platform to be established for new business owners who are ready to kick it up a notch. 
The platform allows you to set up your own business profile page, tell people who you are, what you do, even upload pictures/videos and take advantage of sharing your business through the website to our network of established business owners.
<br /></p>
<h4 className='font-bold mt-3 mb-4 '>****************FEATURING*************** <br /></h4>
<p className='font-semibold'>
Feel supported on your business journey.
Provide exposure to the right customers.
Develop a network for yourself that helps.
Be confident that hard work pays off.
Have a trusted network of business friends.
Be assured what you're doing truly matters.
Take it up a notch - now is the time!</p>
    </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 bg-white rounded-lg shadow-md md:px-[200px] px-9 py-[50px] mx-auto container">
      <h2 className="text-2xl font-bold">Register Your Business on TSN</h2>

      {/* Startup / Business Name */}
      <div>
        <label htmlFor="businessName" className="block font-medium">Startup / Business Name *</label>
        <input
          type="text"
          id="businessName"
          {...register('businessName', { required: 'Business name is required' })}
          className="w-full p-2 mt-1 border rounded-md"
        />
        {errors.businessName && <p className="text-red-500">{errors.businessName.message}</p>}
      </div>

      {/* Startup / Business Brief */}
      <div>
        <label htmlFor="businessBrief" className="block font-medium">Startup / Business Brief *</label>
        <textarea
          id="businessBrief"
          {...register('businessBrief', { required: 'Business brief is required' })}
          className="w-full p-2 mt-1 border rounded-md"
          rows="4"
        />
        {errors.businessBrief && <p className="text-red-500">{errors.businessBrief.message}</p>}
      </div>

      {/* Logo */}
      <div>
        <label htmlFor="logo" className="block font-medium">Logo *</label>
        <input
          type="file"
          id="logo"
          {...register('logo', { required: 'Logo is required' })}
          className="w-full p-2 mt-1 border rounded-md"
        />
        {errors.logo && <p className="text-red-500">{errors.logo.message}</p>}
      </div>

      {/* Website */}
      <div>
        <label htmlFor="website" className="block font-medium">Website</label>
        <input
          type="url"
          id="website"
          {...register('website')}
          placeholder="http://yourbusinessname.com/"
          className="w-full p-2 mt-1 border rounded-md"
        />
      </div>

      {/* Business in */}
      <div>
        <label htmlFor="businessIn" className="block font-medium">Business in *</label>
        <select
          id="businessIn"
          {...register('businessIn', { required: 'Please select a business category' })}
          className="w-full p-2 mt-1 border rounded-md"
        >
          <option value="">Select an option</option>
          <option value="Tech">Tech</option>
          <option value="Retail">Retail</option>
          <option value="Health">Health</option>
          <option value="Finance">Finance</option>
        </select>
        {errors.businessIn && <p className="text-red-500">{errors.businessIn.message}</p>}
      </div>

      {/* Owner / Founder */}
      <div>
        <label htmlFor="owner" className="block font-medium">Owner / Founder *</label>
        <input
          type="text"
          id="owner"
          {...register('owner', { required: 'Owner or founder name is required' })}
          className="w-full p-2 mt-1 border rounded-md"
        />
        {errors.owner && <p className="text-red-500">{errors.owner.message}</p>}
      </div>

      {/* Founder Email */}
      <div>
        <label htmlFor="founderEmail" className="block font-medium">Founder Email *</label>
        <input
          type="email"
          id="founderEmail"
          {...register('founderEmail', { required: 'Email is required' })}
          className="w-full p-2 mt-1 border rounded-md"
        />
        {errors.founderEmail && <p className="text-red-500">{errors.founderEmail.message}</p>}
      </div>

      {/* Founder Phone */}
      <div>
        <label htmlFor="founderPhone" className="block font-medium">Founder Phone *</label>
        <input
          type="tel"
          id="founderPhone"
          {...register('founderPhone', { required: 'Phone number is required' })}
          className="w-full p-2 mt-1 border rounded-md"
        />
        {errors.founderPhone && <p className="text-red-500">{errors.founderPhone.message}</p>}
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="whatsapp" className="block font-medium">WhatsApp</label>
        <input
          type="tel"
          id="whatsapp"
          {...register('whatsapp')}
          className="w-full p-2 mt-1 border rounded-md"
        />
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block font-medium">Location *</label>
        <input
          type="text"
          id="location"
          {...register('location', { required: 'Location is required' })}
          className="w-full p-2 mt-1 border rounded-md"
        />
        {errors.location && <p className="text-red-500">{errors.location.message}</p>}
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="block font-medium">Notes</label>
        <textarea
          id="notes"
          {...register('notes')}
          className="w-full p-2 mt-1 border rounded-md"
          rows="4"
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full p-2 mt-4 font-bold text-white bg-blue-500 rounded-md">
        Register
      </button>
    </form>

    </div>

  );
}

export default RegistrationForm;
