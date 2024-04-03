import { Divider } from "../ExtendedResearchCard/ExtendedResearchCard";

const ResearchFeedbackCard = (props) => {
  const {
    title,
    logo,
    descriptionAndPurpose,
    researchTopics,
    participantExperience,
    inclusionCriteria,
    exclusionCriteria,
    principalInvestigator,
    location,
    compensation,
    contactName,
    contactEmail,
    contactPhone,
    contactWebsite,
    startDate,
    endDate,
    nfaCompensation,
    children,
  } = props;

  const getDate = (date) => {
    const d = new Date(date);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return d.toLocaleDateString("en-US", options);
  };

  return (
    <div class="max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden flex flex-col md:flex-row my-5">
      <div class="flex-1 p-4">
        <div class="flex justify-between items-center">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900">
            {title}
          </h5>
          <img
            class="w-10 h-10 rounded-full"
            src={`${logo}`}
            alt="Study Logo"
          />
        </div>

        <p class="mt-2 text-sm text-gray-700">{descriptionAndPurpose}</p>

        <div class="mt-4">
          <h6 class="font-semibold text-gray-900">Principal Investigator:</h6>
          <p class="text-sm text-gray-600">{principalInvestigator}</p>
        </div>

        <div class="mt-4">
          <h6 class="font-semibold text-gray-900">Recruitment Duration:</h6>
          <h3 class="text-sm text-gray-600">
            <span className="font-semibold">Start Date:</span>{" "}
            {getDate(startDate)}
          </h3>
          <h3 class="text-sm text-gray-600">
            <span className="font-semibold">End Date:</span> {getDate(endDate)}
          </h3>
        </div>

        <div class="mt-4">
          <h6 class="font-semibold text-gray-900">Research Topics:</h6>
          <p class="text-sm text-gray-600">{researchTopics}</p>
        </div>

        <div class="mt-4">
          <h6 class="font-semibold text-gray-900">Participant Experience:</h6>
          <p class="text-sm text-gray-600">{participantExperience}</p>
        </div>

        <div class="mt-4">
          <h6 class="font-semibold text-gray-900">Inclusion Criteria:</h6>
          <p class="text-sm text-gray-600">{inclusionCriteria}</p>
        </div>

        <div class="mt-4">
          <h6 class="font-semibold text-gray-900">Exclusion Criteria:</h6>
          <p class="text-sm text-gray-600">{exclusionCriteria}</p>
        </div>

        <div class="mt-4">
          <h6 class="font-semibold text-gray-900">Location:</h6>
          <p class="text-sm text-gray-600">{location}</p>
        </div>

        <div class="mt-4">
          <h6 class="font-semibold text-gray-900">Participant Compensation:</h6>
          <p class="text-sm text-gray-600">{compensation}</p>
        </div>

        <div class="mt-4">
          <h6 class="font-semibold text-gray-900">NFA Compensation:</h6>
          <p class="text-sm text-gray-600">{nfaCompensation}</p>
        </div>

        <div class="mt-4">
          <p class="text-sm text-gray-600">Contact: {contactName}</p>
          <p class="text-sm text-blue-500 hover:underline">
            <a href="mailto:{ contactEmail }">Email: {contactEmail}</a> |
            <a href="tel:{ contactPhone }">Call: {contactPhone}</a> |
            <a href={`${contactWebsite}`} target="_blank">
              Website
            </a>
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ResearchFeedbackCard;
