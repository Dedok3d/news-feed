import React from 'react';

import styles from './article.module.scss';

interface Props {
}

function Article({ }: Props) {
    function formatDate(date: Date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }

        if (day.length < 2) {
            day = '0' + day;
        }

        return [year, month, day].join('.');
    }

    const getDate = () => {
        const today = new Date();
        return formatDate(today);
    }

    return <div className={styles.article}>
        <header>
            <h2 className={styles.header}>
                Виды юридических статей
            </h2>
        </header>
        <div>
            <p>
                Юридические статьи бывают разные: это могут быть и длинные аналитические статьи о новых поправках, так и практические кейсы, в которых рассматривается та или иная проблема. Давайте рассмотрим, какую информацию можно найти в юридическом блоге:
            </p>
            <p>
                Полезные практические советы. Этот вид юридических статей больше других полезен предпринимателям, так как способен уберечь их от невыгодных шагов.
            </p>
            <p>
                Истории из практики. Этот формат предлагает читателям изучить, как справиться с той или иной юридической проблемой на практике.
            </p>
            <p>
                Анализ того или иного закона. Полезная рубрика для предпринимателей, так как законодательство постоянно видоизменяется.
            </p>
            <p>
                Обзор изменений в законодательстве за определенный период или в определенной области.
            </p>
            <p>
                Инструкции к действию. Например, это может быть «инструкция как снизить налоги».
            </p>
            <p>
                Отчеты о мероприятиях.
            </p>
            <p>
                Другие юридические статьи.
            </p>
            <p>
                Хотите читать качественные юридические статьи от профессионалов? Добавляйте наш сайт в закладки и следите за появлением новых, актуальных статей. Специалисты, работающие в Юридическом Бюро Ольги Абраменко, имеют большой опыт работы, которым и делятся в своих статьях. Эта полезная информация может вам пригодиться, если вы являетесь или планируете стать предпринимателем.
            </p>
        </div>
        <footer className={styles.footer}>
            <span className={styles.span}>
                {getDate()}
                <a className={styles.a} href="https://vk.com/durov">Вконтакте</a>
                <a className={styles.a} href="https://t.me/durov_russia">Телеграмм</a>
                <a className={styles.a} href="https://twitter.com/durov?lang=ru">Twitter</a>
            </span>
        </footer>
    </div>;
}

export default Article;
