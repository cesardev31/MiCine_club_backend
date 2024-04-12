import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop({ type: Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop()
  movieName: string;

  @Prop()
  genero: string;

  @Prop()
  description: string;

  @Prop()
  url_movie: string;

  @Prop()
  url_trailer: string;

  @Prop()
  url_portada: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
