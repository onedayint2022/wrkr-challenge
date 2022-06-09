import React from 'react';
import style from './style.scss';

import Repo from '../../Assert/repo-16.svg';
import Star from '../../Assert/star-16.svg';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface ResultCardProps {
    node_id: string;
    full_name: string;
    description: string;
    updated_at: string;
    license: { name: string } | null;
    language: string;
    stargazers_count: number;
    topics: Array<string>;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ResultCard: React.FC<ResultCardProps> = ({ ...props }) => {
    return (
        <div className={style.ResultCard_container}>
            <div className={style.ResultCard_nameContainer}>
                <img src={Repo} alt="#" />
                {props.full_name.split('/')[0]}
                {'/'}
                <span>{props.full_name.split('/')[1]}</span>
            </div>
            <div className={style.ResultCard_descContainer}>{props.description}</div>
            <div className={style.ResultCard_topicsContainer}>
                {props.topics.map((item, index) => (
                    <div key={`topic${props.node_id}${index}`}>{item}</div>
                ))}
            </div>
            <div className={style.ResultCard_infoContainer}>
                <span>
                    <img src={Star} alt="#" /> {props.stargazers_count}
                </span>
                <span>{props.language}</span>
                {props.license !== null && <span>{props.license.name}</span>}

                <span>{`Updated ${props.updated_at.slice(8, 10)}/${props.updated_at.slice(
                    5,
                    7,
                )}/${props.updated_at.slice(0, 4)}`}</span>
            </div>
        </div>
    );
};

export default ResultCard;
