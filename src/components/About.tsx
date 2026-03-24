export default function About() {
  return (
    <div className="mt-8 items-center justify-center md:mt-0">
      <section className="text-md grid w-full gap-4 rounded-lg bg-black bg-opacity-80 p-8">
        <h1 className="mb-3 text-3xl">Hi there!</h1>
        <p>My name is Facundo and I’m a former Full-Stack web developer.</p>
        <p>
          I started studying Computer Sciense on 2013 at{" "}
          <a
            href="https://en.wikipedia.org/wiki/University_of_Labor_of_Uruguay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan"
          >
            UTU
          </a>
          , which is a public high-school level institute where you get
          specialized on a certain carrer; there I learned basic infrastructure,
          networking and development with Java and MySQL.
        </p>
        <p>
          When I finished high-school I joined a tertiary degree of Software and
          Networking at UTU as well and finished it on mid 2022.
        </p>
        <p>
          On 2019 I did a 3 month bootcamp of React and React Native on{" "}
          <a
            href="https://ha.edu.uy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan"
          >
            Hack Academy
          </a>
          , where I fell in love with JavaScript and it’s ecosystem.
        </p>
        <p>
          On that same year I got hired at TCS as a Junior IT Technician where I
          was trained on several subjects until I joined a QAT team where I did
          User Autentication Testing for more than a year
        </p>
        <p>
          Then I switched to an App Support team where I took care of data fixes
          on the databases, deploying and maintaining clusters on the cloud,
          find errors over the logs, smoke test applications during deployments,
          etc. There I worked with technologies such as Splunk, Kubernetes,
          Docker, MongoDB, .NET, Angular and many others.
        </p>
        <p>
          On September 2021 I left TCS to join Take-off Media as a formal web
          developer. From then I had to work on multiple projects, from
          development to maintainance, with technologies such as Node.js, Next
          JS, PostgreSQL, Vue JS, MongoDb, Docker and many many more, doing
          things like Slack Bots, AI driven RAG Chatbots, user facing full stack
          applications, micro-services, edge functions, private npm packages and
          the list goes on and on.
        </p>
        <p></p>
      </section>
    </div>
  );
}
