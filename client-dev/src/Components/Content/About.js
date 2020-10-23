import React from "react"
import axios from "axios"
import Spinner from "../Spinner"

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      techList: [],
      toolsList: [],
      academic: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState(() => ({ isLoading: true }))
    const config = {
      method: "get",
      baseURL: "https://api.facu.dev/",
      headers: { Accept: "*/*" },
    }

    axios("knowledge", config)
      .then((response) => {
        const resData = response.data.knowledge[0]
        const resTechList = resData.Tech.list
        const resToolsList = resData.Tools.list
        this.setState(() => ({
          techList: resTechList,
          toolsList: resToolsList,
          isLoading: false
        }))
      })
      .catch((error) => {
        console.error(error);
      })

    axios("about", config)
      .then((response) => {
        const resData = response.data.about[0].Academic;
        const resTexts = resData.texts;
        this.setState(() => ({
          academic: resTexts,
          isLoading: false 
        }))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className="bg-primary">
        {this.state.isLoading === true ? (
          <Spinner />
        ) : (
          <div className="flex flex-col items-center ">
            <p className="font-bold text-xl">
              Academic History{" "}
              <span role="img" aria-labelledby="tools emoji">
                📚
              </span>
            </p>

            {this.state.academic.map((items) => {
              return (
                <p
                  key={items.toString()}
                  className="w-64 sm:max-w-2xl sm:min-w-2xl my-3 mx-6 text-justify"
                >
                  {items}
                </p>
              )
            })}

            <p className="font-bold text-xl m-6">
              Technologies I work with{" "}
              <span role="img" aria-labelledby="gear emoji">
                💻
              </span>
            </p>

            <ul className="rounded-lg bg-secondary p-6 w-64 sm:max-w-2xl sm:min-w-2xl text-center">
              {this.state.techList.map((items) => {
                return (
                  <li
                    key={items.toString()}
                    className="text-justify w-auto sm:w-64 block sm:inline-block"
                  >
                    {String.fromCharCode("9642") + " " + items}
                  </li>
                )
              })}
            </ul>

            <p className="font-bold text-xl m-6">
              Tools I use{" "}
              <span role="img" aria-labelledby="tools emoji">
                🧰
              </span>
            </p>

            <ul className="rounded-lg bg-secondary mb-6 p-6 w-64 sm:max-w-2xl sm:min-w-2xl text-center">
              {this.state.toolsList.map((items) => {
                return (
                  <li
                    key={items.toString()}
                    className="text-justify w-auto sm:w-64 block sm:inline-block"
                  >
                    {String.fromCharCode("9642") + " " + items}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default About
