interface TagProps {
    variant: string,
    label: string,
}

export default function Tag({ variant, label }: TagProps) {
    return (
        <span className={`tag --${ variant }`}>{ label }</span>
    )
}
