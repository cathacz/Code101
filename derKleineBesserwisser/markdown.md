# Markdown

---

1. [Headings](##Headings)
2. [Styles](##Styles)
3. [Lists](##Lists)
4. [Tables](##Tables)
5. [Links](##Links)
6. [Images](##Images)
7. [Videos](##Videos)
8. [Blockquote](##Blockquote)

---

## Headings

# H1 > ` # text`

## H2 > ` ## text`

### H3 > ` ### text`

#### H4 > ` #### text`

##### H5 > ` ##### text`

###### H6 > ` ###### text`

Alternative for H1 & H2 with lines:

H1 :leftwards_arrow_with_hook: ===

H2 :leftwards_arrow_with_hook: ---

---

## Styles

` _ text _` > _italic_

` ** text **` > **bold**

` **_ text _**` > **_bold + italic_**

`~~text~~` > ~~strikethrough~~

---

## Lists

### unsorted list:

`* text` :leftwards_arrow_with_hook:

`* text` :leftwards_arrow_with_hook:

`* text ` :leftwards_arrow_with_hook:

- text
- text
- text

### sorted list:

`1. text` :leftwards_arrow_with_hook:

`2. text` :leftwards_arrow_with_hook:

`3. text` :leftwards_arrow_with_hook:

1. text
2. text
3. text

---

## Tables

```
|text | text | text |
|-------------|:-------:|--------------:|
|left-aligned |centered | right-aligned |
| text | text | text |
```

| text         |   text   |          text |
| :----------- | :------: | ------------: |
| left-aligned | centered | right-aligned |
| text         |   text   |          text |

---

## Links

### inline-style link

`[text](source)` this way to [google](www.google.com)

### inline-style link with title

`[text](source "title")`

this way to [google's](www.google.com "Homepage") homepage

### reference-style link

```
[clickable text][case-insensitive reference text]

[Case-INSENSITIVE reference Text]: www.google.com
```

and again [google][here take me]

[here take me]: www.google.com

### relative reference

`[text](/way to/repository file)`

read some stuff about [JavaScript](javaScript/README.md)

### numbered links

```
[text][number]

[number]: www.google.com
```

guess where this is going! [hint][1]

[1]: wwww.google.com

### empty source

`[text]`

The text should [link itself], if there is no source.

### automatically turned links

www.google.com

<www.google.com> the angle brackets should be gone

---

## Images

### inline-style

`![alt text](https://picsum.photos/100)`

![you should see this text while hovering over the picture](https://picsum.photos/100)

### reference-style

```
![alt text][pic]

[pic]: https://picsum.photos/100
```

![you should see this text while hovering over the picture][pic]

[pic]: https://picsum.photos/100

---

## Videos

not really add video but linked to video ...

[![alt text](https://i.ytimg.com/vi/h1VgSIW2VII/maxresdefault.jpg)](https://www.youtube.com/watch?v=h1VgSIW2VII)

---

## Blockquote

```
> quote text
> text some quote

> breaks quote after a free line. Also wraps long lines up nicely without messing up the quote itself – super cool, huh? And it will **recognize** different _styles_.
```

> quote text
> text some quote

> breaks quote after a free line. Also wraps long lines up nicely without messing up the quote itself – super cool, huh? And it will **recognize** different _styles_.
