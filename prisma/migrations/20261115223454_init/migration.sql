-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "rol" VARCHAR(20) NOT NULL DEFAULT 'CIUDADANO',
    "creado_en" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hospitales" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(120) NOT NULL,
    "direccion" VARCHAR(150) NOT NULL,
    "telefono" VARCHAR(30) NOT NULL,
    "especialidades" VARCHAR(150),
    "coordenadas" VARCHAR(50),
    "guardia24hs" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "hospitales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sismos" (
    "id" SERIAL NOT NULL,
    "tipo" VARCHAR(50) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "magnitudMinima" DECIMAL(3,1),
    "magnitudMaxima" DECIMAL(3,1),
    "creado_en" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sismos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "niveles_alerta" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(30) NOT NULL,
    "color" VARCHAR(20) NOT NULL,
    "magnitud_minima" DECIMAL(3,1) NOT NULL,
    "activar_sirena" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "niveles_alerta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estaciones_sismicas" (
    "id" SERIAL NOT NULL,
    "codigo" VARCHAR(30) NOT NULL,
    "ubicacion" VARCHAR(150) NOT NULL,
    "coordenadas" VARCHAR(50) NOT NULL,
    "activa" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "estaciones_sismicas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "terremotos" (
    "id" SERIAL NOT NULL,
    "epicentro" VARCHAR(150) NOT NULL,
    "magnitud" DECIMAL(3,1) NOT NULL,
    "profundidad" DECIMAL(5,2) NOT NULL,
    "fechaHora" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" VARCHAR(50),
    "sismo_id" INTEGER,
    "estacion_id" INTEGER,
    "nivel_alerta_id" INTEGER,

    CONSTRAINT "terremotos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emergencias" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "numero" VARCHAR(10) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "icono" VARCHAR(50) NOT NULL,
    "color" VARCHAR(20) NOT NULL,
    "gratuito" BOOLEAN NOT NULL DEFAULT true,
    "terremoto_id" INTEGER,
    "hospital_id" INTEGER,
    "usuario_id" INTEGER,

    CONSTRAINT "emergencias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sismos_tipo_key" ON "sismos"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "niveles_alerta_nombre_key" ON "niveles_alerta"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "estaciones_sismicas_codigo_key" ON "estaciones_sismicas"("codigo");

-- AddForeignKey
ALTER TABLE "terremotos" ADD CONSTRAINT "fk_sismo" FOREIGN KEY ("sismo_id") REFERENCES "sismos"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "terremotos" ADD CONSTRAINT "fk_estacion" FOREIGN KEY ("estacion_id") REFERENCES "estaciones_sismicas"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "terremotos" ADD CONSTRAINT "fk_nivel_alerta" FOREIGN KEY ("nivel_alerta_id") REFERENCES "niveles_alerta"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "emergencias" ADD CONSTRAINT "fk_hospital" FOREIGN KEY ("hospital_id") REFERENCES "hospitales"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "emergencias" ADD CONSTRAINT "fk_terremoto" FOREIGN KEY ("terremoto_id") REFERENCES "terremotos"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "emergencias" ADD CONSTRAINT "fk_usuario" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
