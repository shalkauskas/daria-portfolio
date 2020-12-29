const overview = [
  {
    statement: (
      <div>
        Everyone loves plants. They improve air quality and humidity levels,
        absorb noise, reduce stress, and create a feeling of comfort. However,
        maintaining a plant requires regular care that we often fail to provide.
        Have you ever happened to forget to water your plant? Has any of your
        home favorites died from either lack of or excessive daylight?
      </div>
    ),
    solutions: (
      <div>
        {" "}
        <ul className="list-disc list-inside">
          <li>Help users choose a new home plant based on the enviroment.</li>
          <li>Provide approachable care recommendations.</li>
          <li>Give an ability to create watering and fertilizing schedules.</li>
          <li>Engage reminders and notifications.</li>
        </ul>
      </div>
    ),
    outcomes: (
      <div>
        <p className="italic mb-6">User perspective:</p>
        <ul className="list-disc list-inside">
          <li>Users keep their plants alive and healthy.</li>
          <li>
            Preset reminders help to provide on-time care and eliminate the need
            to remember unnecessary information.
          </li>
        </ul>
        <p className="italic my-6">Business perspective:</p>
        <ul className="list-disc list-inside">
          <li>Another way of advertising for local plant stores.</li>
          <li>Plant stores get a significant increase in sales volume.</li>
          <li>The app is a good source of loyal customers.</li>
        </ul>
      </div>
    ),
  },
];
export default overview;
