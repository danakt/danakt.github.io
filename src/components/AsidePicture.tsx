import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-width: 1150px) {
    display: flex;
  }
`;

export const ImageWrapper = styled.div`
  img,
  video {
    display: block;
    width: 130px;
    margin-bottom: 11px;

    @media (max-width: 1150px) {
      margin-bottom: auto;
      width: 100px;
    }
  }

  img.with-video {
    display: none;

    @media (max-width: 1150px) {
      display: block;
    }
  }

  video {
    @media (max-width: 1150px) {
      display: none;
    }
  }
`;

export const Text = styled.div`
  @media (max-width: 1150px) {
    padding: 5px 0;
    margin-left: 12px;
  }
`;

type Props = {
  src: string;
  description?: string;
  videoSrc?: string;
  videoType?: string;
};

export const AsidePicture = (props: Props) => (
  <Wrapper>
    <>
      <a href={props.videoSrc ?? props.src}>
        <ImageWrapper>
          <img className={props.videoSrc != null ? 'with-video' : ''} src={props.src} alt={props.description} />

          {props.videoSrc != null && (
            <video preload="auto" autoPlay loop muted poster={props.src}>
              <source src={props.videoSrc} type={props.videoType} />
            </video>
          )}
        </ImageWrapper>
      </a>

      <Text>
        <em>{props.description}</em>
      </Text>
    </>
  </Wrapper>
);
