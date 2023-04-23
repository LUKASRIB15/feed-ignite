import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

export function dateFormatted(date){
  const datePublishedAtFormatted = format(date, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR,
  }) 
  return datePublishedAtFormatted;
}

export function dateRelativeToNow(date){
  const datePublishedAtRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
  return datePublishedAtRelativeToNow
}