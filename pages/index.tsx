import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { snakeCase } from "snake-case";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

const Home: NextPage = () => {
  const [data, setData] = useState<any>();
  const [fieldTypes, setFieldTypes] = useState<any>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [respuestas, setRespuestas] = useState<any>([]);
  const [recomendaciones, setRecomendaciones] = useState<any>([]);

  const [chartData, setChartData] = useState<any>();

  useEffect(() => {
    ChartJS.register(
      RadialLinearScale,
      PointElement,
      LineElement,
      Filler,
      Tooltip,
      Legend
    );

    setFieldTypes({
      default: {
        options: [
          {
            label: "Si",
            name: "si",
            value: 100,
          },
          {
            label: "Parcialmente",
            name: "parcialmente",
            value: 50,
          },
          {
            label: "No",
            name: "no",
            value: 0,
          },
        ],
      },
      tiempoPorAnio: {
        options: [
          {
            label: "2 veces al año",
            name: "2_veces",
            value: 100,
          },
          {
            label: "1 vez al año",
            name: "1_vez",
            value: 50,
          },
          {
            label: "Nunca",
            name: "nunca",
            value: 0,
          },
        ],
      },
      tiempoPorMeses: {
        options: [
          {
            label: "2 veces al mes",
            name: "2_veces",
            value: 100,
          },
          {
            label: "1 vez al mes",
            name: "1_vez",
            value: 50,
          },
          {
            label: "Nunca",
            name: "nunca",
            value: 0,
          },
        ],
      },
    });

    setData({
      funciones: [
        {
          nombre: "Identificar",
          dominios: [
            {
              nombre: "Inventario de Activos",
              preguntas: [
                {
                  pregunta: "¿Clasifica los activos de su compañia?",
                  recomendacion:
                    "Se recomienda contar con una clasificación de los activos de la compañía tanto de software como de hardware",
                },
                {
                  pregunta:
                    "¿Tiene una lista blanca de Software y aplicaciones?",
                  recomendacion:
                    "Se recomienda contar con una lista blanca de softwares y aplicaciones, el cual te permitirá evitar instalar softwares maliciosos",
                },
                {
                  pregunta: "¿Administra sus dispositivos moviles?",
                  recomendacion:
                    "Se recomienda contar con una gestión de dispositivos móviles, para evitar la pérdida de los mismos y que se pueda",
                },
                {
                  pregunta:
                    "¿Utiliza antivirus o herramientas de ciberseguridad en los dispositivos de su organización?",
                  recomendacion:
                    "Se recomienda utilizar antivirus o herramientas de ciberseguridad en los dispositivos de su pyme para detectar y eliminar el malware software malicioso de los equipos y dispositivos antes incluso de que hayan infectado el sistema.",
                },
                {
                  pregunta:
                    "¿Los activos que tiene su organización se encuentran actualizados?",
                  recomendacion:
                    "Se recomienda que sus activos siempre estén actualizados para si evitar una posible amenaza cibernetica.",
                },
                {
                  pregunta:
                    "¿Tiene instalado un firewall en la red de su organización?",
                  recomendacion:
                    "Se recomienda tener instalada un firewall en la red de su organización para mantener a salvo la información almacenada su red, ordenadores o servidores.",
                },
              ],
            },
            {
              nombre: "Política de Ciberseguridad",
              preguntas: [
                {
                  pregunta: "¿Tiene una política de Ciberseguridad?",
                  recomendacion:
                    "Se recomienda tener una política de cibersegurida clara y sencilla para que lo entiendan todos sus colaboradores y pueda tener control de las ciberamenazas",
                },
                {
                  pregunta:
                    "¿La política de ciberseguridad es conocida por sus colaboradores?",
                  recomendacion:
                    "Se recomienda que la política la conozcan todos sus colaboradores, ya que asi tendra una mejor cultura de ciberseguridad en su organización.",
                },
                {
                  pregunta:
                    "¿Sus procedimientos cuentan con roles y responsabilidades ?",
                  recomendacion:
                    "Se recomienda que en todos los procedimientos que cuente su organizacion cuenten con roles y responsabilidades para que asi pueda tener un control de los usuarios y sus accesos.",
                },
              ],
            },
            {
              nombre: "Gestión de Riesgos",
              preguntas: [
                {
                  pregunta: "¿Cuenta con un plan de riesgos?",
                  recomendacion:
                    "Se recomienda contar con un plan de riesgos para prevenir la interrupción de su negocio y aumentar la estabilidad del mismo.",
                },
                {
                  pregunta:
                    "¿Realiza una medición del impacto y probabilidad de un evento de ciberseguridad?",
                  recomendacion:
                    "Se recomienda Contar con un plan para la gestión de riesgo y busqueda de vulnerabilidades.",
                },
                {
                  pregunta:
                    "¿Tiene algún Software de búsqueda de vulnerabilidades?",
                  recomendacion:
                    "Se recomienda contar con un servicio de análisis de vulnerabilidades, siendo así, la mejor manera de mantener la continuidad y eficiencia de los procesos para que este preparado para cualquier eventualidad, evitando daños de varios tipos para la empresa",
                },
                {
                  pregunta:
                    "¿Frecuentemente hace una búsqueda de sus vulnerabilidades?",
                  recomendacion:
                    "Se recomienda que los análisis de vulnerabilidades se deben realizar de manera periódica. Debido al creciente número de vulnerabilidades a lo largo de los años.",
                },
                {
                  pregunta:
                    "¿Realiza búsqueda de sitios web clonados de su empresa?",
                  recomendacion:
                    "Se recomienda realice búsqiedas de sitios web clonados, ya que sera de gran ayuda para evitar estafas para sus usuarios.",
                },
              ],
            },
          ],
        },
        {
          nombre: "Proteger",
          dominios: [
            {
              nombre: "Gestión de Acessos a Usuarios",
              preguntas: [
                {
                  pregunta:
                    "¿Tiene un inventario de cuentas y contraseñas de sus usuarios?",
                  recomendacion:
                    "Se recomienda tener un inventarios de las cuentas de usuarios que tiene su empresa para asi empezar a gestionarlas y saber que usuarios aun estan activos y darles de baja.",
                },
                {
                  pregunta:
                    "¿En su organización existe el cambio de contraseña por un tiempo determinado?",
                  recomendacion:
                    "Se recomienda que exista el cambio de contraseña en un tiempo determinado para asi mantener sus cuentas seguras.",
                },
                {
                  pregunta:
                    "¿Utiliza doble factor de autenticación (MFA) para poder ingresar a sus cuentas?",
                  recomendacion:
                    "Se recomienda utilizar el MFA tambien llamado doble factor de autenticacion para reducir las brechas de seguridad en comparación con el uso de solo contraseñas.",
                },
                {
                  pregunta:
                    "¿Cuenta con separación de funciones según el rol del usuario?",
                  recomendacion:
                    "Se recomienda contar con una sepración de funciones para reducir la probabilidad de que los errores no sean detectados. Asi mismo, puede brindar asistencia en la protección de los activos de la organización.",
                },
              ],
            },
            {
              nombre: "Seguridad en la nube",
              preguntas: [
                {
                  pregunta:
                    "¿Tiene un contrato de servicio con un proveedor de nube?",
                  recomendacion:
                    "Se recomienda tener un contrato de servicio con un proveedor de nube ",
                },
                {
                  pregunta: "¿Utiliza un backup en su nube?",
                  recomendacion: "Se recomienda utilizar un backup en su nube",
                },
                {
                  pregunta:
                    "¿Cuenta con alguna herramienta para la seguridad en la nube?",
                  recomendacion:
                    "Se recomienda tener alguna herramienta para la seguridad en la nube",
                },
                {
                  pregunta:
                    "¿El almacenamiento de su backup se encuentra en la nube?",
                  recomendacion:
                    "Se recomienda que su almacenamiento de backup se encuentre en la nube",
                },
                {
                  pregunta:
                    "¿El almacenamiento que comparte en la nube esta cifrado?",
                  recomendacion:
                    "Se recomienda que el almacenamiento de la nube este cifrado",
                },
                {
                  pregunta:
                    "¿Conoce el nivel de seguridad que te brinda tu proveedor en la nube?",
                  recomendacion:
                    "Se recomienda que conozca el nivel de seguridad que te brinda tu proveedor en la nube",
                },
                {
                  pregunta:
                    "¿Los usuarios que ingresan a su nube tienen funciones diferentes según su rol?",
                  recomendacion:
                    "Se recomienda que los usuarios que ingresan a su nube tienen funciones diferentes según su rol",
                },
              ],
            },
            {
              nombre: "Plan de concientización",
              preguntas: [
                {
                  pregunta: "¿Realiza campañas de capacitación a su personal?",
                  recomendacion:
                    "Se recomienda realizar campañas de capacitación a su personal",
                },
                {
                  pregunta: "¿Realiza pruebas de ingeniería social?",
                  recomendacion:
                    "Se recomienda realizar pruebas de ingeniería social",
                },
              ],
            },
            {
              nombre: "Plan de respuesta y recuperación",
              preguntas: [
                {
                  pregunta: "¿Tiene un plan de respuesta ante un incidente?",
                  recomendacion:
                    "Se recomienda tener un plan de respuesta ante un incidente",
                },
                {
                  pregunta:
                    "¿Existe roles y responsabilidades en su equipo de recuperación?",
                  recomendacion:
                    "Se recomienda que existan roles y responsabilidades en su equipo de recuperación",
                },
              ],
            },
            {
              nombre: "Seguridad de proveedores",
              preguntas: [
                {
                  pregunta:
                    "¿Realiza un seguimiento y revisión de los servicios de sus proveedores?",
                  recomendacion:
                    "Se recomienda que realice un seguimiento y revisión de los servicios de sus proveedores",
                },
                {
                  pregunta:
                    "¿Cuenta con un contrato con claúsulas de confidencialidad y define los niveles de servicio con su proveedor?",
                  recomendacion:
                    "Se recomienda tener un contrato con claúsulas de confidencialidad y define los niveles de servicio con su proveedor",
                },
              ],
            },
            {
              nombre: "Seguridad de Comunicaciones",
              preguntas: [
                {
                  pregunta:
                    "¿Controla el uso de dispositivos externos removibles?",
                  recomendacion:
                    "Se recomienda controlar el uso de dispositivos externos removibles",
                },
                {
                  pregunta:
                    "¿Realiza un analisis de antivirus a los dispositivos externos que ingresan a tu organización?",
                  recomendacion:
                    "Se recomienda realizar un analisis de antivirus a los dispositivos externos que ingresan a tu organización",
                },
                {
                  pregunta:
                    "¿Los colaboradores cuentan con un correo para el uso laboral?",
                  recomendacion:
                    "Se recomienda que los colaboradores cuentan con un correo para el uso laboral",
                },
                {
                  pregunta:
                    "¿Tienen acuerdos de transferencia de comunicación?",
                  recomendacion:
                    "Se recomienda tener acuerdos de transferencia de comunicación",
                },
                {
                  pregunta:
                    "¿Cuentan con acuerdos de confidencialidad de información?",
                  recomendacion:
                    "Se recomienda tener acuerdos de confidencialidad de información",
                },
              ],
            },
          ],
        },
        {
          nombre: "Responder",
          dominios: [
            {
              nombre: "Ejecución de respuestas ante incidentes",
              preguntas: [
                {
                  pregunta:
                    "¿Tiene un control de cambios despulpues de ejecutar un plan de respuesta ante incidentes de ciberseguridad?",
                  recomendacion:
                    "Se recomienda tener un control de cambios despues de ejecutar un plan de respuesta ante incidentes de ciberseguridad",
                },
              ],
            },
            {
              nombre: "Plan mejora continua",
              preguntas: [
                {
                  pregunta:
                    "¿Tiene una bitacora para documentar los incidentes?",
                  recomendacion:
                    "Se recomienda tener una bitacora para documentar los incidentes",
                },
              ],
            },
          ],
        },
        {
          nombre: "Recuperar",
          dominios: [
            {
              nombre: "Ejecución de plan de recuperación",
              preguntas: [
                {
                  pregunta:
                    "¿Cuenta con un plan de recuperación despues de finalizar actividades ante un evento de ciberseguridad?",
                  recomendacion:
                    "Se recomienda tener un plan de recuperación despues de finalizar actividades ante un evento de ciberseguridad",
                },
              ],
            },
          ],
        },
      ],
    });
  }, []);

  /**
   *
   * @param funcion
   * @param dominio
   * @param pregunta
   * @param respuesta
   */
  const marcarRespuesta = (
    funcion: any,
    dominio: any,
    pregunta: any,
    value: any
  ) => {
    let i = respuestas.findIndex((respuesta: any) => {
      return (
        respuesta.funcion === funcion &&
        respuesta.dominio === dominio &&
        respuesta.pregunta === pregunta
      );
    });

    if (i > -1) {
      respuestas.splice(i, 1);
    }

    let respuestaEl = {
      funcion,
      dominio,
      pregunta,
      value,
    };

    setRespuestas((respuestas: any) => [...respuestas, respuestaEl]);
  };

  /**
   *
   * @param funcion
   * @returns
   */
  const mostrarFuncion = (funcion: any) => {
    let respuesta = respuestas.find((respuesta: any) => {
      return respuesta.funcion === funcion && respuesta.value <= 50;
    });
    if (respuesta) {
      return true;
    }
    return false;
  };

  /**
   *
   * @param funcion
   * @param dominio
   * @returns
   */
  const mostrarDominio = (funcion: any, dominio: any) => {
    let respuesta = respuestas.find((respuesta: any) => {
      return (
        respuesta.funcion === funcion &&
        respuesta.dominio === dominio &&
        respuesta.value <= 50
      );
    });
    if (respuesta) {
      return true;
    }
    return false;
  };

  /**
   *
   * @param funcion
   * @param dominio
   * @param pregunta
   * @returns
   */
  const mostrarRecomendacion = (funcion: any, dominio: any, pregunta: any) => {
    let respuesta = respuestas.find((respuesta: any) => {
      return (
        respuesta.funcion === funcion &&
        respuesta.dominio === dominio &&
        respuesta.pregunta === pregunta
      );
    });
    if (respuesta) {
      return respuesta.value <= 50;
    }
    return false;
  };

  /**
   *
   * @param e
   */
  const handleSubmit = (e: any) => {
    e.preventDefault();

    setIsSubmitted(false);
    setIsSubmitted(true);

    setTimeout(() => {
      const config = {
        type: "radar",
        data: {
          labels: data.funciones.map((funcion: any) => funcion.nombre),
          datasets: [
            {
              label: "Total",
              data: data.funciones.map((funcion: any) => {
                let total = 0;
                let points = 0;

                funcion.dominios.forEach((dominio: any) => {
                  dominio.preguntas.forEach((pregunta: any) => {
                    total = total + 100;

                    let respuesta = respuestas.find((respuesta: any) => {
                      return (
                        respuesta.funcion === funcion.nombre &&
                        respuesta.dominio === dominio.nombre &&
                        respuesta.pregunta === pregunta.pregunta
                      );
                    });

                    if (respuesta) {
                      points = points + respuesta.value;
                    }
                  });
                });

                return (points * 100) / total;
              }),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              pointBackgroundColor: "rgb(255, 99, 132)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(255, 99, 132)",
            },
          ],
        },
        options: {
          elements: {
            line: {
              borderWidth: 3,
            },
          },
          scales: {
            r: {
              angleLines: {
                display: false,
              },
              suggestedMin: 0,
              suggestedMax: 100,
            },
          },
        },
      };
      setChartData(config);

      document.getElementById("recomendaciones")?.focus();
    }, 1000);
  };

  return (
    <div className="bg-gray-200">
      <Head>
        <title>Formulario</title>
        <meta name="description" content="Formulario" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="max-w-2xl mx-auto py-20">
          <h1 className="text-center uppercase text-2xl font-bold mb-20">
            Marco de Trabajo de Ciberseguridad compuesto por normas y controles
            para proteger la información de las pymes
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="space-y-16 mb-12">
              {data &&
                data.funciones.map((funcion: any) => (
                  <div key={funcion.nombre} className="space-y-2">
                    <h2 className="text-xl text-indigo-800 font-bold uppercase">
                      {funcion.nombre}{" "}
                      <span className="ml-2 text-[10px] text-gray-500 font-light">
                        función
                      </span>
                    </h2>
                    <div className="bg-white rounded-md shadow-md py-10 px-8 space-y-16">
                      {funcion.dominios.map((dominio: any) => (
                        <div key={dominio.nombre} className="space-y-4">
                          <h3 className="text-lg font-semibold">
                            {dominio.nombre}
                          </h3>
                          <div className="bg-indigo-50 p-6 rounded-md space-y-8">
                            {dominio.preguntas.map(
                              (pregunta: any, index: number) => (
                                <div
                                  key={pregunta.pregunta}
                                  className="space-y-2"
                                >
                                  <p className="text-md">
                                    {index + 1}. {pregunta.pregunta}
                                  </p>
                                  {fieldTypes[pregunta.tipo || "default"] ? (
                                    <div className="ml-4 flex items-center gap-16">
                                      {fieldTypes[
                                        pregunta.tipo || "default"
                                      ].options.map((option: any) => (
                                        <div
                                          key={option.name}
                                          className="space-x-2"
                                        >
                                          <input
                                            required
                                            type="radio"
                                            name={snakeCase(
                                              `${funcion.nombre}_${dominio.nombre}_${pregunta.pregunta}_${index}`
                                            )}
                                            id={snakeCase(
                                              `${funcion.nombre}_${dominio.nombre}_${pregunta.pregunta}_${index}_${option.name}`
                                            )}
                                            value={option.value}
                                            onChange={() =>
                                              marcarRespuesta(
                                                funcion.nombre,
                                                dominio.nombre,
                                                pregunta.pregunta,
                                                option.value
                                              )
                                            }
                                          />
                                          <label
                                            className="text-md"
                                            htmlFor={snakeCase(
                                              `${funcion.nombre}_${dominio.nombre}_${pregunta.pregunta}_${index}_${option.name}`
                                            )}
                                          >
                                            {option.label}
                                          </label>
                                        </div>
                                      ))}
                                    </div>
                                  ) : null}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            <div className="sticky bottom-0 bg-white py-4 border-t shadow-t flex mb-20">
              <button
                type="submit"
                className="m-auto px-12 py-4 text-white bg-indigo-500 rounded shadow"
              >
                Enviar
              </button>
            </div>
          </form>

          {isSubmitted && (
            <div
              id="recomendaciones"
              tabIndex={-1}
              className="bg-white rounded-md shadow p-8 space-y-12"
            >
              <h2 className="text-bold text-2xl font-bold">Recomendaciones:</h2>

              {data &&
                data.funciones.map((funcion: any) => (
                  <div key={funcion.nombre}>
                    {mostrarFuncion(funcion.nombre) && (
                      <>
                        <p className="text-xl font-bold mb-4">
                          {funcion.nombre}
                        </p>
                        <div className="space-y-4">
                          {funcion.dominios.map((dominio: any) => (
                            <div key={dominio.nombre}>
                              {mostrarDominio(
                                funcion.nombre,
                                dominio.nombre
                              ) && (
                                <>
                                  <p className="text-lg font-semibold mb-2">
                                    {dominio.nombre}
                                  </p>
                                  <ul className="list-disc list-inside space-y-2 bg-indigo-50 p-4">
                                    {dominio.preguntas.map(
                                      (pregunta: any, index: number) => (
                                        <>
                                          {mostrarRecomendacion(
                                            funcion.nombre,
                                            dominio.nombre,
                                            pregunta.pregunta
                                          ) && (
                                            <li>{pregunta.recomendacion}</li>
                                          )}
                                        </>
                                      )
                                    )}
                                  </ul>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              {chartData && (
                <div>
                  <p className="text-xl font-bold text-center mb-8">
                    Variación % Cumplimiento AS - IS
                  </p>
                  <Radar
                    width={400}
                    height={400}
                    data={chartData.data}
                    options={chartData.options}
                  />
                  <p className="text-xl font-bold text-center mx-8">TO BE</p>
                  <Radar
                    width={400}
                    height={400}
                    data={{
                      labels: data.funciones.map(
                        (funcion: any) => funcion.nombre
                      ),
                      datasets: [
                        {
                          label: "To be",
                          data: [100, 100, 100, 100],
                          backgroundColor: "rgba(46, 204, 113, 0.2)",
                          borderColor: "rgb(46, 204, 113)",
                          pointBackgroundColor: "rgb(46, 204, 113)",
                          pointBorderColor: "#fff",
                          pointHoverBackgroundColor: "#fff",
                          pointHoverBorderColor: "rgb(46, 204, 113)",
                        },
                      ],
                    }}
                    options={{
                      elements: {
                        line: {
                          borderWidth: 3,
                        },
                      },
                      scales: {
                        r: {
                          angleLines: {
                            display: false,
                          },
                          suggestedMin: 0,
                          suggestedMax: 100,
                        },
                      },
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
